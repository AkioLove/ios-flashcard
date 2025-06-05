# iOS Flashcard App Design Document

## Overview

This app aims to help English learners strengthen their vocabulary by incorporating active recall and spaced repetition. The core vocabulary list will be based on the NGSL (New General Service List) and NGSL-Spoken lists. Additional learning aids include mind maps, synonyms/antonyms/related words, word roots and morphology, and other research-backed strategies.

## Goals
- Provide an effective mobile study tool that leverages spaced repetition
- Encourage active thinking by prompting users to recall words rather than passively review
- Cover both general vocabulary (NGSL) and spoken vocabulary (NGSL-Spoken)
- Include rich word relationships such as synonyms, antonyms, and derivatives
- Visualize vocabulary in mind maps grouped by context or semantics
- Offer insight on prefixes, suffixes, word roots, and different word forms (noun/verb/adj)
- Integrate other techniques that improve retention, such as usage examples and progress tracking

## Key Features

1. **Vocabulary Sets**
   - Base word list from NGSL and NGSL-Spoken.
   - Each entry contains definition, example sentence, part of speech, phonetic transcription, and audio pronunciation.
   - Optional custom sets so learners can add their own words.

2. **Mind Map Visualization**
   - Group words by topics or contexts (e.g., travel, school, business) or by semantics (e.g., food, emotions).
   - Interactive mind map view to explore related vocabulary.

3. **Synonyms, Antonyms, Related Words**
   - For each word, provide synonyms, antonyms, and similar terms.
   - Display short notes on nuances or usage difference when necessary.

4. **Word Roots and Morphology**
   - Show a breakdown of word roots, prefixes, and suffixes.
   - Show different word forms such as noun, verb, adjective, adverb when applicable.

5. **Spaced Repetition Engine**
   - Schedule reviews based on user performance (e.g., using a simple algorithm or open-source library).
   - Display upcoming review sessions and track progress statistics.

6. **Active Recall Exercises**
   - Flashcard mode prompts users with the definition or example and asks them to recall the word.
   - Option to type the word or choose from multiple choices for additional practice.

7. **Additional Learning Aids**
   - Usage examples with audio or images for context.
   - Option to show collocations or phrases containing the word.
   - Short quizzes or games (e.g., fill in the blanks) to reinforce active thinking.
   - Daily goal reminders and streak tracking.

## Architecture Outline

- **Data Layer**: Preload NGSL/NGSL-Spoken word lists in local database (CoreData or SQLite). Support user notes and custom lists.
- **Logic Layer**: Implement spaced repetition scheduling and track user performance metrics.
- **Presentation Layer**: Use UIKit or SwiftUI for modern iOS design. Flashcard views, mind map diagrams, and progress dashboards.

## Monetization and Distribution

- Free version with basic features and limited custom word slots.
- Premium upgrade unlocks unlimited custom lists, additional statistics, or cloud sync.
- Plan to distribute via the App Store.

## Development Plan

1. Setup project, integrate word list database.
2. Implement flashcard engine with spaced repetition.
3. Build mind map view to categorize vocabulary.
4. Add synonyms/antonyms, word root details.
5. Add usage examples, progress tracking, and optional gamified elements.
6. Test with early adopters, gather feedback, iterate.

