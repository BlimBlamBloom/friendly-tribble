export const lessonData = {
    lessonNumber: 1,
    title: "제1과",
    videoId: "placeholder_video_id",
    
    conversation: {
        korean: `지수: 안녕하세요.
민호: 안녕하세요.
지수: 이름이 뭐예요?
민호: 저는 민호예요. 이름이 뭐예요?
지수: 저는 지수예요. 어디에서 왔어요?
민호: 저는 한국에서 왔어요. 어디에서 왔어요?
지수: 저는 대만에서 왔어요. 만나서 반갑습니다.
민호: 만나서 반갑습니다.`,
        
        english: `Jisoo: Hello.
Minho: Hello.
Jisoo: What's your name?
Minho: I'm Minho. What's your name?
Jisoo: I'm Jisoo. Where are you from?
Minho: I'm from Korea. Where are you from?
Jisoo: I'm from Taiwan. Nice to meet you.
Minho: Nice to meet you.`
    },
    
    vocabulary: `안녕하세요 - Hello
이름 - Name
뭐예요 - What is it
저는 - I (subject)
어디 - Where
에서 - From (particle)
왔어요 - Came
한국 - Korea
대만 - Taiwan
만나서 반갑습니다 - Nice to meet you`,
    
    questionsAndAnswers: `이름이 뭐예요? What's your name?
 저는 ______예요. I'm ______.
 어디에서 왔어요? Where are you from?
 저는 ______에서 왔어요. I'm from ______.`,
    
    quizVocab: {
        "안녕하세요": ["Hello"],
        "이름": ["Name"],
        "뭐예요": ["What is it"],
        "저는": ["I (subject)"],
        "어디": ["Where"],
        "에서": ["From (particle)"],
        "왔어요": ["Came"],
        "한국": ["Korea"],
        "대만": ["Taiwan"],
        "만나서 반갑습니다": ["Nice to meet you"]
    },
    
    navigation: {
        prev: { text: "← Korean", url: "../korean.html" },
        next: { text: "Lesson 2 →", url: "lesson2.html" }
    }
};
