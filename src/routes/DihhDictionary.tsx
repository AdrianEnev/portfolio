const englishToBulgarian = [
    { phrase: "What's up?", translation: "Какво е нагоре?", note: "" },
    { phrase: "You've got a point", translation: "Имаш точка", note: "" },
    { phrase: "For real?", translation: "За истина?", note: "" },
    { phrase: "Are you for real?", translation: "Ти за истината ли си?", note: "" },
    { phrase: "No cap", translation: "Без шапка", note: "" },
    { phrase: "No shit", translation: "Без лайно" },
    { phrase: "Call it a day", translation: "Наречи го ден" },
    { phrase: "They jumped out of my head", translation: "Скочиха извън главата ми" },
    { phrase: "What's up", translation: "Кое е горе?" },
    { phrase: "I'm down", translation: "Аз съм долу" },
    { phrase: "Hit me up", translation: "Удари ме горе" },
    { phrase: "I got hooked up", translation: "Аз бях завързан горе" },
    { phrase: "break a leg", translation: "Счупи крак" },
    { phrase: "spill the tea", translation: "Разлей чая" },
    { phrase: "I got hooked up", translation: "Аз бях завързан горе" },
    { phrase: "Right now", translation: "Дясно сега" },
];

const uniqueEnglishToBulgarian = englishToBulgarian.filter((entry, index, arr) =>
    arr.findIndex(({ phrase, translation }) => phrase === entry.phrase && translation === entry.translation) === index
);

const bulgarianToEnglish = [
    { phrase: "Лека нощ", translation: "Light night" },
    { phrase: "Приятна нощ", translation: "Friendly night" },
    { phrase: "Ти преля чашата", translation: "You spilled the bottle" },
    { phrase: "Аз пишкам", translation: "I am penising" },
];

const Section = ({
    title,
    description,
    entries,
}: {
    title: string;
    description: string;
    entries: { phrase: string; translation: string; note?: string }[];
}) => {
    return (
        <section className="space-y-6">
            <div>
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
                    {title}
                </p>
                <h2 className="text-3xl font-semibold text-emerald-900 mt-2">
                    {description}
                </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
                {entries.map(({ phrase, translation, note }) => (
                    <div
                        key={`${title}-${phrase}`}
                        className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-5 shadow-[0_8px_30px_-20px_rgba(16,185,129,0.9)]"
                    >
                        <p className="text-xs font-semibold tracking-[0.15em] text-emerald-500">
                            Original
                        </p>
                        <p className="text-lg font-semibold text-emerald-900">
                            {phrase}
                        </p>
                        <div className="mt-4">
                            <p className="text-xs font-semibold tracking-[0.15em] text-emerald-500">
                                Translation
                            </p>
                            <p className="text-2xl font-semibold text-emerald-700">
                                {translation}
                            </p>
                        </div>
                        {note && (
                            <p className="mt-3 text-sm text-emerald-600 italic">
                                {note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

const DihhDictionary = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-900 py-32 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="overflow-hidden rounded-[32px] border border-emerald-200 bg-white shadow-2xl">
                    <div className="bg-emerald-700/95 px-8 py-12 text-white">
                        <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">
                            /dihh
                        </p>
                        <h1 className="mt-3 text-4xl font-semibold leading-tight">
                            Адрихх и Юли Тотр език
                        </h1>
                        <p className="mt-4 max-w-2xl text-emerald-50/80">
                            Преводач: Нейт Хигърс
                        </p>
                    </div>
                    <div className="space-y-12 px-8 py-12">
                        <Section
                            title="English → Bulgarian"
                            description="Анг - БГ"
                            entries={uniqueEnglishToBulgarian}
                        />
                        <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
                        <Section
                            title="Bulgarian → English"
                            description="БГ - Анг"
                            entries={bulgarianToEnglish}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DihhDictionary;
