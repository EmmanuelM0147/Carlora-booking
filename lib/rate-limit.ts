import { Redis } from "@upstash/redis";

type RateLimitResponse = {
  success: boolean;
  remaining: number;
  reset: number;
};

export async function rateLimit(
  request: Request,
  limit = 5, // 5 requests
  window = 60 * 60 // 1 hour in seconds
): Promise<RateLimitResponse> {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const key = `rate-limit:${ip}`;
    
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });

    const [response] = await redis
      .pipeline()
      .incr(key)
      .expire(key, window)
      .exec();

    const count = response as number;
    const remaining = limit - count;
    const reset = Date.now() + window * 1000;

    return {
      success: count <= limit,
      remaining: Math.max(0, remaining),
      reset,
    };
  } catch (error) {
    console.error("Rate limit error:", error);
    // Fail open - allow the request if rate limiting fails
    return {
      success: true,
      remaining: 1,
      reset: Date.now() + window * 1000,
    };
  }
}