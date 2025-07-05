const Lunge = () => (
    <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-y-3 md:max-w-1/2">
            <p className="text-3xl font-semibold">Lunge: The start of my coding journey</p>

            <div className="flex flex-col gap-y-3 text-lg">
                <p>Lunge is the first major project I ever worked on, and while it’s not the cleanest or most polished app out there, it represents a full year of growth in my coding journey throughout 2024. It was my introduction to full stack development and also the first app I’ve ever published. If you're curious, feel free to check out the nearly 400 commits on my Lunge GitHub repo — it’s a great look into my learning process and how the project evolved over time. I do plan to revisit Lunge in the future to refine it further, especially the web version, which is still a bit unfinished.</p>                                
                <p>Lunge Mobile is a fitness IOS app that lets you create your own custom workout split, track your exercises, and dive into detailed workout statistics. You can log your food and macronutrient intake, set personalized daily goals based on your lifestyle, and even generate custom workout plans using AI. The app also lets you connect with friends and view their stats, all while supporting up to two accounts per device with any email. It’s available in seven languages—Bulgarian, English, German, French, Italian, Spanish, and Russian—and uses AI to monitor and filter inappropriate usernames or profile pictures.</p>
                <p>Lunge Web complements the mobile app by allowing you to view your stats, manage your account settings, and access your friends list directly from your browser.</p>
            </div>
        </div>

        <button className="
            project-button mt-3 md:mt-0 
        "
            style={{ alignSelf: 'stretch' }}
            onClick={() => window.open('https://apps.apple.com/bg/app/lunge/id6739221997?platform=iphone')}
        >
            <p className="text-5xl font-semibold text-red-500">Lunge</p>
            <p className="text-3xl font-semibold text-red-400">Fitness Tracker</p>
        </button>
    </div>
)

export default Lunge;