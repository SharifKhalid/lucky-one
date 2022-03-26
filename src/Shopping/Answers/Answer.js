import React from 'react';
import './Answer.css'

//Answer to questions
const Answer = () => {
    return (
        <div>
            <div className='react-div'>
                <h1 className='react-header'>React যেভাবে কাজ করে</h1>
                <p className='react-ans'>React হচ্ছে JavaScript এর একটি Library. এটি দিয়ে মূলত JavaScript এর UI অর্থাৎ User Interface কে Develop করা হয়।  React এই User Interface কে ‍বিভিন্ন Component এ ভাগ করে। যেমন- Similar in look different in data, Standalone Component, Container Component, 
                React এই Component গুলোর কোনো অংশ কে change করতে Virtual Dom ব্যবহার করে। ‍যার মাধ্যমে React নির্দিষ্ট করে করে শুধু মাত্র ঐ অংশকেই পরিবর্তন করে, যেটা পরিবর্তন করা দরকার। এছাড়ও React এ JSX এর মাধ্যমে খুব সহজে html ও JavaScript Code এক সাথে লেখা যায়। React ঐ Code গুলাকে আবার Compile করে JavaScript রুপান্তর করে। এভাবেই মূলত React কাজ করে।</p>
            </div>

            <div className='react-div'>
                <h1 className='react-header'>Props ও State এর মধ্যে পার্থক্য</h1>
                <p className='react-ans'>
                Props হচ্ছে Property এর সংক্ষিপ্ত রূপ। এর মাধ্যমে React এ একটি Component থেকে অন্য একটি Component এ Data pass করা যায়। এর বৈশিষ্ট হচ্ছে এটি immutable. অর্থাৎ এর মাধ্যমে একটি Component থেকে অন্য একটি Component এ Data pass করার পর, অন্য Component থেকে  ঐ Data কে আর পরিবর্তন করা যায় না।
                State হচ্ছে React এর Component এর একটি অবস্থা, যা বিভিন্ন সময় পরিবর্তন হতে পারে। এটি  Component এর যে Data গুলো contain করে, সেটাও পরিবর্তন হতে পারে। অর্থাৎ State হচ্ছে mutable. এর একটি বৈশিষ্ট হচ্ছে এটি asynchronous way তে কাজ করে। এছাড়াও এটি Component এর behavior কে নিয়ন্ত্রণ করে ।  
                </p>
            </div>
        </div>
    );
};

export default Answer;