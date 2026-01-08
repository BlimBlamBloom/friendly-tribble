export const lessonData = {
    lessonNumber: 1,
    title: "Lección 1",
    videoId: "wTj5DSjPAik",
    
    conversation: {
        spanish: `Alejandro: Hola.
Polly: Hola.
Alejandro: ¿Cómo te llamas?
Polly: Me llamo Polly. ¿Cómo te llamas?
Alejandro: Me llamo Alejandro. ¿De dónde eres?
Polly: Soy de Taiwán. ¿De dónde eres?
Alejandro: Soy de España. Encantado.
Polly: Encantada.`,
        
        chinese: `Alejandro：你好。
Polly：你好。
Alejandro：你叫什麼名字？
Polly：我叫 Polly。你叫什麼名字？
Alejandro：我叫 Alejandro。你從哪裡來？
Polly：我來自台灣。你從哪裡來？
Alejandro：我來自西班牙。很高興認識你。
Polly：我也很高興認識你。`
    },
    
    vocabulary: `Hola - 你好
Cómo - 怎麼
me / te - 我 / 你（受詞，用於動詞 llamar）
llamar (llamas / llamo) - 叫；名叫
dónde - 哪裡
de dónde - 從哪裡
ser (soy / eres) - 是（我是 / 你是）
España - 西班牙
Taiwán - 台灣
Encantado / Encantada - 很高興認識你（男生用 Encantado，女生用 Encantada）`,
    
    questionsAndAnswers: `¿Cómo te llamas? 你叫什麼名字？
 Me llamo ______. 我叫 ______。

 ¿De dónde eres? 你從哪裡來？
 Soy de ______. 我來自 ______。`,
    
    quizVocab: {
        "Hola": ["你好"],
        "Cómo": ["怎麼"],
        "me": ["我（受詞）"],
        "te": ["你（受詞）"],
        "llamas": ["叫你"],
        "llamo": ["叫我"],
        "dónde": ["哪裡"],
        "de dónde": ["從哪裡"],
        "soy": ["我是"],
        "eres": ["你是"],
        "España": ["西班牙"],
        "Taiwán": ["台灣"],
        "Encantado": ["很高興認識你（男生用）"],
        "Encantada": ["很高興認識你（女生用）"]
    },
    
    navigation: {
        prev: { text: "← Español", url: "/spanish.html" },
        next: { text: "Lección 2 →", url: "lesson2.html" }
    }
};
