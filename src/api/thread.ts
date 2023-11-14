import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const messageThread = await openai.beta.threads.create({
    messages: [
      {
        role: "user",
        content: "Hello, what is AI?",
        file_ids: ["file-abc123"],
      },
      {
        role: "user",
        content: "How does AI work? Explain it in simple terms.",
      },
    ],
  });

  console.log(messageThread);
}

main();