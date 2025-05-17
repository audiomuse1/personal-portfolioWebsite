// src/utils/fetchAI.ts
export async function fetchAIResponse(prompt: string) {
  const res = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch AI response');
  }

  const data = await res.json();
  return data.result;
}
