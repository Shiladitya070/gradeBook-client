import { NextResponse } from "next/server"
import { HfInference } from '@huggingface/inference'

console.log(process.env.AI_KEY)
const hf = new HfInference(process.env.HF_KEY)
export const GET = async () => {

    const ai_data = await hf.sentenceSimilarity({
        model: 'sentence-transformers/paraphrase-xlm-r-multilingual-v1',
        inputs: {
            source_sentence: "You are good",
            sentences: ["I feel great", "I feel good", "I feel wonderful", "I feel bad"
            ]
        }
    })
    return NextResponse.json({ data: "got it", ai_data })
} 