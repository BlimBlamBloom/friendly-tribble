export const lessonData = {
    lessonNumber: 1,
    title: "제1과",
    videoId: "placeholder_video_id",
    //
    conversation: {
        korean: `지수: 안녕하세요.
민호: 안녕하세요.
지수: 이름이 뭐예요?
민호: 저는 민호예요. 이름이 뭐예요?
지수: 저는 지수예요. 어디에 가요?
민호: 저는 도서관에 가요. 어디에 가요?
지수: 저는 집에 가요. 반가워요.
민호: 반가워요. 안녕히 가세요.
지수: 안녕히 계세요`,
        
        english: `Jisoo: Hello.
Minho: Hello.
Jisoo: What's your name?
Minho: I'm Minho. What's your name?
Jisoo: I'm Jisoo. Where are you going?
Minho: I'm going to the library. Where are you going?
Jisoo: I'm going home. Nice to meet you.
Minho: Nice to meet you. Bye.
Jisoo: Bye.`
    },
    
    vocabulary: `안녕하세요 - Hello
이름 - Name
뭐예요 - What is it
저는 - I (subject)
어디 - Where
어디에 - To where
가요 - go
도서관 - library
집 - house
반가워요 - nice to meet you
안녕히 가세요 - Goodbye (Go well)
안녕히 계세요 - Goodbye (Stay well)`,
    
    questionsAndAnswers: `이름이 뭐예요? What's your name?
 저는 ______예요. I'm ______.
 어디에 가요? Where are you going?
 저는 ______에 가요. I'm going to ______.`,
    
    quizVocab: {
        "안녕하세요": ["Hello"],
        "이름": ["Name"],
        "뭐예요": ["What is it"],
        "저는": ["I (subject)"],
        "어디": ["Where"],
        "어디에": ["To where"],
        "가요": ["Go"],
        "도서관": ["Library"],
        "집": ["House"],
        "반가워요": ["Nice to meet you"],
        "안녕히 가세요": ["Goodbye (Go well)"]
        "안녕히 계세요": ["Goodbye (Stay well)"]
    },
    
    navigation: {
        prev: { text: "← Korean", url: "../korean.html" },
        next: { text: "Lesson 2 →", url: "lesson2.html" }
    }
};
