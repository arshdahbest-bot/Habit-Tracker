import Anthropic from '@anthropic-ai/sdk';

// Shared helpers for the API routes in app/api. Server-only: never imported by app screens.

export const MODEL = 'claude-opus-5-5';

export function jsonError(status: number, message: string) {
  return Response.json({ error: message }, { status });
}

export const NO_KEY_MESSAGE =
  'The AI tutor is not set up yet. Add ANTHROPIC_API_KEY to the .env file (see README), then restart.';

// Best-effort limit per IP so one person can't run up your bill (resets when the server restarts).
const hits = new Map<string, number[]>();
export function rateLimited(request: Request, perMinute = 15) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'local';
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > perMinute;
}

/** Turns SDK errors into friendly messages for students. */
export function friendlyError(e: unknown) {
  if (e instanceof Anthropic.AuthenticationError) return jsonError(500, 'The AI key is not valid. Check ANTHROPIC_API_KEY in .env.');
  if (e instanceof Anthropic.RateLimitError) return jsonError(429, 'The AI is busy right now. Please try again in a moment.');
  if (e instanceof Anthropic.BadRequestError) return jsonError(400, 'The AI could not read that request. Try again with something shorter.');
  if (e instanceof Anthropic.APIError) return jsonError(502, 'The AI service had a problem. Please try again.');
  return jsonError(502, 'Could not reach the AI service. Check your internet connection.');
}

export function textOf(response: Anthropic.Beta.BetaMessage) {
  return response.content
    .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .trim();
}
