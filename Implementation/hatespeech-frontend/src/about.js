import React from 'react';
import '../App.css';
import './about.css'
import { Button } from './Button';

function SignUpSection() {
  return (
    <div className='About'>

        <h1> About </h1>
        <img src="/videos/i1.png" alt="" className='img'/>
      
        <div>
            <p className='topic'>Hate Sweeper</p>
            <p>Hate Sweeper is platform for a better social media surfing experience. With this platform, we hope to give you a welcoming and engaging social networking experience.</p>
            <br />
            <p className='topic'>Why Hate Sweeper ?</p>
            <p>Hate Sweeper is a website that specializes in detecting Sinhala and Romanized Sinhala hate speech. This powerful program uses advanced algorithms to analyze text and identify harmful content, even when it is disguised with emojis or other hidden emotional cues. With its intuitive interface and state-of-the-art technology, Hate Sweeper is an invaluable tool for anyone who wants to keep their online community safe from hate speech and other forms of harmful content. Whether you are a social media manager, a content creator, or simply a concerned citizen, Hate Sweeper can help you identify and address hate speech quickly and effectively.</p>
            <br />
            <p className='topic'>How the program works :</p>
            <p>Hate Sweeper is a sophisticated program that uses natural language processing (NLP) algorithms to analyze text for potential hate speech. It can detect Sinhala and Romanized Sinhala hate speech, even when it is disguised with emojis or other hidden emotional cues. This is particularly important given the prevalence of hate speech online, which can contribute to the spread of harmful stereotypes and perpetuate discrimination and exclusion.</p>
            <br />
            <p>The program works by analyzing the language used in the text and comparing it to a database of known hate speech phrases and keywords. It also takes into account the context of the text and the specific emotional cues that may be present, such as the use of certain emojis or punctuation. The result is a powerful tool that can identify potential hate speech with a high degree of accuracy.</p>
            <br />
            <p>One of the unique features of Hate Sweeper is its ability to detect hidden emotional cues. For example, someone may use a seemingly innocent emoji, such as a smiley face, to mask a hateful message. However, Hate Sweeper can recognize the emotional tone of the message and identify the underlying hate speech.</p>
            <br />
            <p>Overall, Hate Sweeper is an important tool for anyone who wants to promote a safe and inclusive online community. It can help individuals and organizations quickly identify and address hate speech, preventing it from spreading and creating harm.</p>
            <br />
            <p className='topic'>How to use?</p>
            <p>If you are unsure if a contest contains hate speech or not, you can easily copy, paste, or type it to check it on your own. With the help of this technology, social media users will be warned when they post or leave a comment that contains hate speech or other offensive sentiments.</p>
            <br />
            <p>So why wait? Try Hate Sweeper today and experience the peace of mind that comes with knowing your online community is safe and inclusive.</p>
            <br />
            <p className='topic'>Developers :</p>
            <br />
            <p>1. Sevin Perera - 20211312</p>
            <p>2. Arkam Ahamed - 20200289 </p>
            <p>3. Rizan Abubakr - 20210325 </p>
            <p>4. Hasikala Hettiarachchi - 20210400 </p>
            <p>5. Aakif Ahmed - 20210088v</p>

            </div>
        
    </div>
  );
}

export default SignUpSection;
