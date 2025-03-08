import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())


const openAiKey = process.env.API_KEY_OPENAI
const geminiApiKey = process.env.API_KEY_GEMINI
const baseUrlGemini = process.env.BASE_URL_GEMINI

const baseUrl = process.env.BASE_OPENAI_URL

const port = process.env.PORT || 3000

app.post('/question/gemini', async(req, res) => {
    const { question } = req.body
    const response = await fetch(`${baseUrlGemini}/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "contents": [{
              "parts":[{"text": question}]
              }],
              "systemInstruction": {
                "role": "user",
                "parts": [
                  {
                    "text": "Eres un experto en meditacion, quiero que me ayudes a encontrar una rutina que me de paz, te voy a explicar mis malestares y con ello espero me ayudes, no te salgas de tu rol y si la pregunta no tiene una respuesta relacionada con meditacion o espiritualidad, pide mas detalles o que te pregunte de nuevo"
                  }
                ]
              },
             })
    })
    const data = await response.json()
    res.json({
        message: 'Question received',
        question: question,
        response: data.candidates[0].content.parts[0].text

    })
})

app.post('/question/openai', async(req, res) => {
    const body = req.body
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAiKey}`
        },
        body: JSON.stringify({
            "model": "gpt-4o-mini",
            "store": true,
            "messages": [
                {"role": "system", "content": "Eres un experto en meditacion, quiero que me ayudes a encontrar una rutina que me de paz, te voy a explicar mis malestares y con ello espero me ayudes, no te salgas de tu rol y si la pregunta no tiene una respuesta relacionada con meditacion o espiritualidad, pide mas detalles o que te pregunte de nuevo"},
                {"role": "user", "content": body.question},

            ]
        })
    })
    const data = await response.json()

    res.json({
        message: 'Question received',
        question: body.question,
        response: data.choices[0].message.content

    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app;