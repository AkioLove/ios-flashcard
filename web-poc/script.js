const words = [
    { word: 'school', definition: 'a place where children go to learn' },
    { word: 'children', definition: 'young people who are not yet adults' },
    { word: 'learn', definition: 'to gain knowledge or skill' },
    { word: 'read', definition: 'to look at and understand written words' },
    { word: 'write', definition: 'to form letters or words on a surface' },
    { word: 'math', definition: 'the study of numbers and shapes' },
    { word: 'science', definition: 'the study of the natural world' },
    { word: 'history', definition: 'the study of past events' },
    { word: 'teacher', definition: 'a person who helps students learn' },
    { word: 'homework', definition: 'schoolwork done at home' }
];

const { createApp } = Vue;

createApp({
    data() {
        return {
            words,
            index: 0,
            flipped: false
        }
    },
    computed: {
        currentWord() {
            return this.words[this.index] || null;
        }
    },
    methods: {
        flipCard() {
            this.flipped = !this.flipped;
        },
        nextWord() {
            this.flipped = false;
            if (this.index < this.words.length - 1) {
                this.index++;
            } else {
                this.index = 0;
            }
        },
        prevWord() {
            this.flipped = false;
            if (this.index > 0) {
                this.index--;
            } else {
                this.index = this.words.length - 1;
            }
        }
    }
}).mount('#app');
