# IB Study Buddy 🎓

A student-friendly study app for **IBDP** students, built with **Expo (React Native)** so it runs on
iPhone, Android and the web from one codebase and can be published to the App Store and Google Play.

## Features

| Tab | What it does |
| --- | --- |
| 🏠 **Home** | Add your name and photo (it becomes your tutor avatar), light/dark switch, and **My IB subjects** with SL/HL badges and chapter progress. |
| 🎯 **My IB subjects** (from Home) | Pick your 6 subjects + TOK and set each to **SL or HL**. SL hides HL-only chapters, and AI lessons are pitched at your level. It checks for 6 subjects with 3–4 at HL. |
| 🎨 **Customize** (from Home) | Tutor name; app colour, avatar colour, accessory, shape, frame and cartoon filter; avatar voice, speed and pitch. |
| 🧑‍🏫 **Tutor** | The full **IB syllabus** for each subject, unit by unit. Open any chapter to: play a built-in lesson, get an **AI-written lesson for that chapter at your level** (read aloud), make **chapter flashcards or a quiz**, or ask the AI about it. |
| 💬 **Ask AI** | Ask any question in any subject — type it or **send a photo** of the problem. Answers are explained step by step and read aloud. |
| 🃏 **Cards** / 📝 **Quiz** | Built-in flashcards and IB-style quizzes for every subject; quiz results show an estimated IB grade (1–7). |
| 📊 **Progress** | Study streak, chapters studied, a 7-day activity chart, estimated grade per subject and a predicted Diploma points total. |
| 🎮 **Break** | Play **Snake** or **Ping Pong** — **once per day** — then see **today's leaderboard**. |

**Subjects (14):** English A: Language & Literature · French B · Hindi B · Economics · Business Management ·
History · Psychology · Biology · Chemistry · Physics · Computer Science · Environmental Systems & Societies ·
Maths AA · Theory of Knowledge. Chapter lists are in `data/syllabus.ts` (sciences follow the guides for first
assessment 2025, ESS 2026, CS and Psychology 2027). **Check them against the current IB subject guides
before publishing** — the IB revises courses regularly.

Hand-written lessons, flashcards and quizzes are in `data/subjects.ts` and `data/moreSubjects.ts`. Every
other chapter gets its lesson, flashcards and quiz written by Claude on demand (`app/api/generate+api.ts`),
then saved on the phone so each chapter is only generated once.

**Economics diagrams:** Economics lessons show IB-style diagrams under each step (demand, supply,
equilibrium, demand shifts, excess supply, PED comparisons with worked percentages, perfectly
elastic/inelastic demand, PED along a straight-line demand curve, total revenue, negative
externalities). Chapters 2.1–2.3 include an interactive **Diagram Lab**, and chapter 2.5 a **PED calculator**. Diagrams live in `components/econ/`; attach one to a lesson step with the
`diagrams` field in `data/subjects.ts`.
To add more content, edit **`data/subjects.ts`** — every screen reads from that one file.

## Run it

### Option A — on your computer
```bash
npm install
npx expo start
```
Scan the QR code with the **Expo Go** app on your phone, or press `w` to open it in a browser.

### Option B — in an online app builder (Rork, Replit, Expo Snack…)
This is a standard Expo Router project, so you can import this GitHub repository (or copy the
`app/`, `components/`, `context/`, `data/`, `services/` folders plus `package.json`, `app.json`
and `tsconfig.json`) into any tool that supports Expo / React Native.

## Project structure
```
app/
  _layout.tsx          root: theme + profile provider
  (tabs)/_layout.tsx   bottom tab bar
  (tabs)/index.tsx     Home: avatar setup, theme switch, subjects
  (tabs)/tutor.tsx     IB syllabus browser (units → chapters)
  chapter.tsx          one chapter: lessons, practice, tools
  lesson.tsx           lesson player (built-in or AI-written), read aloud
  practice.tsx         AI flashcards / quiz for one chapter
  subjects.tsx         choose subjects and SL/HL
  (tabs)/ask.tsx       Ask AI chat (text + photo questions, answers read aloud)
  customize.tsx        avatar, voice and colour settings
  api/ask+api.ts       server-side route for Ask AI (keeps the API key secret)
  api/generate+api.ts  server-side route that writes chapter lessons, flashcards and quizzes
server/claude.ts       shared helpers for the API routes
  (tabs)/flashcards.tsx
  (tabs)/quiz.tsx
  (tabs)/progress.tsx  personal progress dashboard
  (tabs)/break.tsx     once-a-day game + daily leaderboard
components/
  Avatar.tsx           photo → animated avatar
  UI.tsx               shared buttons, cards, subject picker
  games/SnakeGame.tsx
  games/PongGame.tsx
  econ/                economics graphs, diagram presets, Diagram Lab, PED calculator
  FlashcardDeck.tsx / QuizRunner.tsx   shared flashcard and quiz components
context/AppContext.tsx light/dark theme + saved profile
data/syllabus.ts       IB units and chapters for every subject (HL-only chapters marked)
data/subjects.ts       subjects, built-in lessons, flashcards and quiz questions
data/moreSubjects.ts   content for English A, French B, Hindi B, BM, Psychology, CS, ESS, TOK
services/progress.ts   personal progress tracking (stored on the device)
services/ai.ts         sends questions to the Ask AI route, saves chat history
services/useSpeaker.ts avatar voice (text-to-speech with the chosen voice settings)
services/dailyGame.ts  once-a-day lock + leaderboard (offline or Supabase)
services/avatarService.ts optional AI avatar hook
```

## Setting up the Ask AI tutor

The Ask AI tab uses Claude. Your API key is kept on the **server side** (the Expo dev server
while testing, or your hosted API route when published) and is never built into the app.

1. Create an account at [platform.claude.com](https://platform.claude.com), add billing, and create an API key.
2. In the project folder, create a file called `.env` (copy `.env.example`) containing:
   ```
   ANTHROPIC_API_KEY=sk-ant-...your key...
   ```
   `.env` is in `.gitignore`, so it will not be uploaded to GitHub.
3. Restart `npx expo start`. The app's questions go to `app/api/ask+api.ts`, which calls Claude.

**Cost:** every question is a paid API call. The route uses `claude-opus-5-5` (most capable) with
medium effort; a typical question costs a few US cents. To lower cost, change the `model` in
`app/api/ask+api.ts` (for example to `claude-sonnet-5-5` or `claude-haiku-4-5`) and set a
monthly spend limit in the Claude Console. The route also limits each device to 15 questions a minute.

**When you publish the app**, phones can't reach your computer, so the API route must be hosted:
```bash
npx expo export --platform web
eas deploy            # EAS Hosting; add ANTHROPIC_API_KEY as an environment variable there
```
Then set `EXPO_PUBLIC_API_BASE_URL` in `.env` to the deployed address (e.g. `https://your-app.expo.app`)
before building with `eas build`. Before a public launch, add sign-in or App Check–style protection
so strangers can't use your endpoint.

## Making the leaderboard truly multiplayer (recommended before launch)

Out of the box the app works **offline**: your score is ranked against a set of **demo players**
that change every day (the app says so on screen). To have real students compete with each other,
connect a free **Supabase** database:

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:
   ```sql
   create table scores (
     id bigint generated always as identity primary key,
     player_id text not null,
     name text not null check (char_length(name) <= 20),
     score int not null check (score >= 0 and score < 10000),
     game text not null check (game in ('snake', 'pong')),
     day date not null,
     created_at timestamptz default now(),
     unique (player_id, day)          -- one game per player per day, enforced by the server
   );
   alter table scores enable row level security;
   create policy "read scores"  on scores for select using (true);
   create policy "add a score"  on scores for insert with check (day >= current_date - 1);
   ```
3. Copy `.env.example` to `.env` and fill in `EXPO_PUBLIC_SUPABASE_URL` and
   `EXPO_PUBLIC_SUPABASE_ANON_KEY` (Project Settings → API).

## Turning photos into AI cartoon avatars (optional)

By default the avatar is created **on the device** (circle crop, colour wash, outline, hat,
animation) — no photo ever leaves the phone. If you want a true AI-drawn cartoon, set
`EXPO_PUBLIC_AVATAR_API_URL` to **your own server** endpoint that accepts `{ imageBase64 }` and
returns `{ avatarUrl }` (see `services/avatarService.ts`). Keep any paid AI API key on that server,
never inside the app.

## Publishing to the App Store / Google Play

1. Change `ios.bundleIdentifier` and `android.package` in `app.json` (e.g. `com.yourname.ibstudybuddy`).
2. Add an app icon and splash image (1024×1024 PNG) and reference them in `app.json`.
3. Install the build tool and log in:
   ```bash
   npm install -g eas-cli
   eas login
   eas build:configure
   ```
4. Build and submit:
   ```bash
   eas build --platform ios      # needs an Apple Developer account ($99/year)
   eas submit --platform ios
   eas build --platform android  # Google Play Console account ($25 one-off)
   eas submit --platform android
   ```
5. Before submitting, write a **privacy policy** (the app uses photos, sends Ask AI questions and
   photos to Anthropic's API, and, if you enable Supabase, stores names and scores). Apple asks for its URL. Because many IB students are under 18,
   keep data collection minimal.
