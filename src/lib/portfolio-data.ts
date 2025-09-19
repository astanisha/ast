
export interface PortfolioArticle {
    title: string;
    description: string;
    tags: string[];
    author: string;
    date: string;
    body: {
        type: 'paragraph' | 'heading' | 'image';
        content: string;
        level?: number;
        alt?: string;
        imageHint?: string;
    }[];
}

export const portfolioArticles: Record<string, PortfolioArticle> = {
    'urban-waste-management': {
        title: "Investigative Report: Dhaka's Mounting Waste Crisis",
        description: "An in-depth look into the challenges and potential solutions for waste management in one of the world's most densely populated cities.",
        tags: ["Investigative Journalism", "Social Justice", "Urban Development", "Environment"],
        author: "Anika Saima Tanisha",
        date: "September 19, 2024",
        body: [
            { type: 'heading', level: 2, content: "The Mountains We Build" },
            { type: 'paragraph', content: "Every day, Dhaka, a city teeming with over 20 million souls, generates nearly 7,000 tons of solid waste. The sheer volume is staggering, creating artificial hills on the city's outskirts—monuments to our consumption. For my final year project, I spent three months tracing the journey of this waste, from the household bin to its final, often problematic, resting place." },
            { type: 'image', content: 'https://picsum.photos/seed/waste-pile/800/500', alt: 'A large pile of garbage at a landfill', imageHint: 'landfill waste' },
            { type: 'heading', level: 3, content: "A System Under Strain" },
            { type: 'paragraph', content: "My investigation revealed a system stretched to its breaking point. Waste collection is inconsistent, with many neighborhoods relying on informal collectors known as 'tokais'. While these individuals are crucial to recycling, they work in hazardous conditions for minimal pay. I spoke with several collectors who shared stories of health problems and social stigma." },
            { type: 'paragraph', content: "The city corporations are aware of the problem, but a lack of funding, infrastructure, and public awareness campaigns hampers their efforts. Landfills are overflowing, and poorly managed dumping sites are contaminating soil and water sources, posing a significant public health risk." },
            { type: 'heading', level: 3, content: "Glimmers of Hope: Community-Led Initiatives" },
            { type: 'paragraph', content: "However, my report also uncovered glimmers of hope. In several communities, residents have taken matters into their own hands, implementing neighborhood-based composting programs and recycling drives. These grassroots efforts not only reduce the burden on municipal services but also foster a sense of collective responsibility. They prove that with the right support, change is possible." },
            { type: 'heading', level: 2, content: "Conclusion: A Call for Systemic Change" },
            { type: 'paragraph', content: "Solving Dhaka's waste crisis requires a multi-pronged approach. It needs significant investment in modern infrastructure, formalization and support for informal waste collectors, and robust public education. As my investigation concludes, it's clear that this is not just an environmental issue, but a matter of social justice and public health that demands our immediate attention." },
        ],
    },
    'resilience-of-street-vendors': {
        title: "Documentary Short: The Unyielding Souls of Dhaka's Streets",
        description: "A multimedia project capturing the daily struggles, unwavering spirit, and vital economic role of Dhaka's street vendors.",
        tags: ["Documentary", "Photojournalism", "Human Interest", "Economics"],
        author: "Anika Saima Tanisha",
        date: "September 19, 2024",
        body: [
            { type: 'heading', level: 2, content: "The Pulse of the Pavement" },
            { type: 'paragraph', content: "They are the first to rise and the last to sleep. Dhaka's street vendors are the lifeblood of the city's informal economy, their calls and colors painting the urban landscape. For this documentary, I immersed myself in their world, camera in hand, to capture the rhythm of their daily lives." },
            { type: 'image', content: 'https://picsum.photos/seed/vendor-portrait/800/500', alt: 'A portrait of a street vendor in Dhaka', imageHint: 'street vendor' },
            { type: 'heading', level: 3, content: "A Daily Battle for Survival" },
            { type: 'paragraph', content: "The film follows three vendors: a fuchka seller who inherited his cart from his father, a young woman selling handmade flower garlands to support her education, and an elderly man selling books on a busy intersection. Their stories are ones of constant struggle—against evictions, extortion, and the unpredictable weather. Yet, what shines through is their incredible resilience." },
            { type: 'paragraph', content: "Through intimate interviews and vérité-style footage, the documentary highlights their business acumen, their deep connections with their customers, and their dreams for a more secure future. They are not just vendors; they are entrepreneurs, community pillars, and keepers of the city's culture." },
            { type: 'heading', level: 2, content: "Beyond the Transaction" },
            { type: 'paragraph', content: "This project aims to look beyond the simple act of buying and selling. It's a story about human dignity, the right to a livelihood, and the incredible perseverance required to survive in a megacity. It challenges viewers to see the faces behind the goods and recognize their contribution to the vibrant tapestry of Dhaka." },
        ],
    },
    'traditional-bangladeshi-arts': {
        title: "Feature: Weaving the Past into the Future",
        description: "An article exploring the rich history and modern revival of traditional arts and crafts in Bangladesh, from Jamdani weaving to Nakshi Kantha embroidery.",
        tags: ["Cultural Reporting", "Writing", "Arts", "Heritage"],
        author: "Anika Saima Tanisha",
        date: "September 19, 2024",
        body: [
            { type: 'heading', level: 2, content: "Threads of a Nation" },
            { type: 'paragraph', content: "In the intricate patterns of a Jamdani sari and the colorful stitches of a Nakshi Kantha quilt lies the story of Bangladesh. These are not mere objects but living traditions, passed down through generations of artisans. For this feature, I traveled to rural workshops and bustling city markets to explore how these ancient crafts are surviving—and thriving—in the 21st century." },
            { type: 'image', content: 'https://picsum.photos/seed/weaving-loom/800/500', alt: 'A weaver working at a traditional loom', imageHint: 'weaving loom' },
            { type: 'heading', level: 3, content: "The Masters of the Loom" },
            { type: 'paragraph', content: "My journey began in a village near the Shitalakshya river, the historic heart of Jamdani weaving. I met artisans who can craft poetry into fabric, their hands moving with a speed and precision that seems almost magical. They spoke of the challenges they face: competition from machine-made textiles and the struggle to attract the younger generation to the craft." },
            { type: 'heading', level: 3, content: "A Modern Renaissance" },
            { type: 'paragraph', content: "Yet, there is a powerful movement to preserve and innovate. I interviewed young designers who are reinterpreting traditional motifs for a global audience, creating fusion wear that is both contemporary and deeply rooted in Bangladeshi heritage. Social enterprises are working to ensure fair wages and provide artisans with direct access to markets, empowering them to continue their legacy." },
            { type: 'paragraph', content: "From the delicate pottery of Shariatpur to the vibrant Rickshaw art of Dhaka, this article celebrates the artists who are keeping Bangladesh's cultural heart beating, ensuring these beautiful traditions are not just preserved, but woven into the very fabric of the future." },
        ],
    },
    'expressions-of-dhaka': {
        title: "Photo Essay: The Faces of a Thousand Stories",
        description: "A curated collection of street photography that tells the stories of the people of Dhaka, capturing moments of joy, sorrow, and everyday life in a city of contrasts.",
        tags: ["Photography", "Storytelling", "Human Interest"],
        author: "Anika Saima Tanisha",
        date: "September 19, 2024",
        body: [
            { type: 'heading', level: 2, content: "A City in a Glance" },
            { type: 'paragraph', content: "Dhaka is a city of a million micro-narratives, each written on the faces of its people. This photo essay is my attempt to capture some of those stories. Through my lens, I sought to document the raw, unfiltered expressions of life in this relentless, beautiful, and chaotic metropolis." },
            { type: 'image', content: 'https://picsum.photos/seed/dhaka-crowd/800/500', alt: 'A bustling street scene in Dhaka', imageHint: 'city crowd' },
            { type: 'paragraph', content: "Each photograph is a moment frozen in time: the laughter of children playing in a narrow alley, the weary eyes of a rickshaw puller resting in the shade, the concentrated gaze of a vendor counting his day's earnings, the shared smile between friends over a cup of tea." },
            { type: 'image', content: 'https://picsum.photos/seed/old-man-dhaka/800/500', alt: 'An elderly man with a thoughtful expression', imageHint: 'old man' },
            { type: 'paragraph', content: "This collection is not just about individuals, but about the collective soul of Dhaka. It's about finding beauty in the mundane, dignity in hardship, and humanity in the crowd. These are the expressions that give the city its unique, undeniable character." },
            { type: 'image', content: 'https://picsum.photos/seed/dhaka-children/800/500', alt: 'Children playing in a street in Dhaka', imageHint: 'children playing' },
            { type: 'paragraph', content: "I invite you to look into their eyes and see the stories they hold. They are the stories of Dhaka." },
        ],
    },
};

    