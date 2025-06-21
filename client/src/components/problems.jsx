import { 
    FaBriefcase, 
    FaUsers, 
    FaUserTie, 
    FaChartLine, 
    FaCode, 
    FaHandshake, 
    FaProjectDiagram, 
    FaComments,
    FaLightbulb,
    FaNetworkWired,
    FaBook,
    FaGraduationCap,
    FaLaptopCode,
    FaTools,
    FaBalanceScale,
    FaClock,
    FaQuestionCircle,
    FaRocket,
    FaFileAlt,
    FaShareAlt,
    FaStar,
    FaThumbsUp,
    FaTrophy,
    FaUniversity,
    FaUserGraduate,
    FaUserPlus,
    FaWrench
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconColors = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 
    'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-teal-500',
    'text-orange-500', 'text-cyan-500', 'text-lime-500', 'text-amber-500',
    'text-emerald-500', 'text-violet-500', 'text-fuchsia-500', 'text-rose-500',
    'text-sky-500', 'text-stone-500', 'text-zinc-500', 'text-neutral-500',
    'text-slate-500', 'text-gray-500', 'text-warmGray-500', 'text-coolGray-500',
    'text-lightBlue-500', 'text-trueGray-500', 'text-blueGray-500'
];

const problems_data = [
    ['Not able to find Good Job Referrals?', FaBriefcase],
    ['Not able to connect with like-minded Peers?', FaUsers],
    ['Not able to find a Mentor?', FaUserTie],
    ['Struggling with career growth?', FaChartLine],
    ['Finding it hard to learn new technologies?', FaCode],
    ['Need guidance for your projects?', FaProjectDiagram],
    ['Looking for better networking opportunities?', FaNetworkWired],
    ['Want to improve your coding skills?', FaLaptopCode],
    ['Need help with interview preparation?', FaUserGraduate],
    ['Looking for career advice?', FaHandshake],
    ['Want to participate in coding challenges?', FaTrophy],
    ['Need help with resume building?', FaFileAlt],
    ['Struggling with time management?', FaClock],
    ['Looking for internship opportunities?', FaUniversity],
    ['Want to contribute to open source?', FaShareAlt],
    ['Need help with system design?', FaWrench],
    ['Looking for coding best practices?', FaStar],
    ['Want to learn about new frameworks?', FaRocket],
    ['Need help with debugging?', FaTools],
    ['Looking for study resources?', FaBook],
    ['Want to improve your soft skills?', FaComments],
    ['Need help with career transitions?', FaBalanceScale],
    ['Looking for project ideas?', FaLightbulb],
    ['Want to get feedback on your code?', FaThumbsUp],
    ['Need help with certifications?', FaGraduationCap],
    ['Looking for coding partners?', FaUserPlus],
    ['Have unanswered tech questions?', FaQuestionCircle]
];

const Problems = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap py-4 md:py-8 space-y-4 md:space-y-8">
           <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r dark:from-blue-600 dark:to-white bg-clip-text text-transparent from-blue-600 to-gray-900 text-center px-4"
        >Networking issues?</h1>
            <motion.div 
                className="flex gap-4 sm:gap-6 md:gap-8"
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear'
                }}
                whileHover={{ animationPlayState: 'paused' }}
            >
                {problems_data.map(([problem, Icon], index) => (
                    <div 
                        key={index} 
                        className="flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                    >
                        <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                            <Icon className={`text-lg sm:text-xl ${iconColors[index % iconColors.length]}`} />
                        </div>
                        <span className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white">{problem}</span>
                    </div>
                ))}
            </motion.div>
            <motion.div 
                className="flex gap-4 sm:gap-6 md:gap-8"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear'
                }}
                whileHover={{ animationPlayState: 'paused' }}
            >
                {problems_data.map(([problem, Icon], index) => (
                    <div 
                        key={index} 
                        className="flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                    >
                        <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                            <Icon className={`text-lg sm:text-xl ${iconColors[index % iconColors.length]}`} />
                        </div>
                        <span className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white">{problem}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Problems;