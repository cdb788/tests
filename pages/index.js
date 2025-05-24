import React, { useState } from 'react';
import { ChevronRight, Users, Briefcase, GraduationCap, DollarSign, Trophy, BookOpen } from 'lucide-react';

const GameTheoryGuide = () => {
  const [activeSection, setActiveSection] = useState('basics');
  const [selectedScenario, setSelectedScenario] = useState(null);

  const scenarios = {
    college: {
      title: "College Application Strategy",
      icon: <GraduationCap className="w-6 h-6" />,
      situation: "You're applying to colleges. Do you apply to your dream school even though it's competitive?",
      gameTheory: "This is a coordination game with asymmetric information. Other students are making similar decisions, but you don't know their strategies.",
      strategy: [
        "Apply to a mix: reach schools, matches, and safeties",
        "Consider that if everyone thinks a school is 'too competitive,' it might actually be less competitive",
        "Your unique background might give you an edge others don't see"
      ],
      realWorld: "Many students avoid applying to top schools, thinking they won't get in. This creates opportunities for those who do apply."
    },
    internship: {
      title: "Internship Competition",
      icon: <Briefcase className="w-6 h-6" />,
      situation: "Limited internship spots at top companies. Should you apply for the most prestigious ones or safer options?",
      gameTheory: "This is a multi-player competition game where your success depends on both your qualifications and others' choices.",
      strategy: [
        "Apply broadly - don't put all eggs in one basket",
        "Build unique skills that differentiate you",
        "Network early - relationships matter as much as qualifications"
      ],
      realWorld: "Students who only apply to Google/Apple often miss great opportunities at smaller companies with less competition."
    },
    salary: {
      title: "Salary Negotiation",
      icon: <DollarSign className="w-6 h-6" />,
      situation: "You got a job offer! Should you negotiate the salary or accept what's offered?",
      gameTheory: "This is a bargaining game. Both sides want a deal, but each wants the best terms possible.",
      strategy: [
        "Research market rates - information is power",
        "Negotiate other benefits if salary is fixed",
        "Show enthusiasm while negotiating - you want the job"
      ],
      realWorld: "Many entry-level workers leave money on the table. Even a small increase compounds over your career."
    },
    teamwork: {
      title: "Group Project Dynamics",
      icon: <Users className="w-6 h-6" />,
      situation: "Group project where everyone's grade depends on the team's work. How much effort should you put in?",
      gameTheory: "This is the classic 'free rider problem' - everyone benefits from good work, but individuals might slack off.",
      strategy: [
        "Establish clear expectations and deadlines early",
        "Create accountability mechanisms",
        "Be the reliable team member - your reputation matters long-term"
      ],
      realWorld: "Your reputation in school follows you to internships and jobs. Professors and classmates become your network."
    },
    networking: {
      title: "Professional Networking",
      icon: <Trophy className="w-6 h-6" />,
      situation: "Industry events and networking opportunities. Should you focus on meeting senior people or peers?",
      gameTheory: "This is a network effects game - the value of connections grows as the network grows.",
      strategy: [
        "Mix of both: seniors can mentor, peers can collaborate",
        "Give before you receive - offer help to others",
        "Maintain relationships over time, not just when you need something"
      ],
      realWorld: "Many jobs come through referrals. Your classmates today might be hiring managers tomorrow."
    }
  };

  const keyPrinciples = [
    {
      title: "Think Beyond Yourself",
      description: "Consider what others are likely to do, not just what you want to do"
    },
    {
      title: "Information is Power",
      description: "The more you know about the situation and other players, the better your decisions"
    },
    {
      title: "Long-term Reputation Matters",
      description: "Today's decisions affect future opportunities through your reputation"
    },
    {
      title: "Sometimes Cooperation Beats Competition",
      description: "Working together often creates more value than fighting over limited resources"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          Game Theory for Your Future
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Learn how strategic thinking can help you make better decisions about school, career, and life.
        </p>
        
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveSection('basics')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'basics' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Key Principles
          </button>
          <button
            onClick={() => setActiveSection('scenarios')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'scenarios' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Real Scenarios
          </button>
        </div>

        {activeSection === 'basics' && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">What is Game Theory?</h2>
              <p className="text-blue-700">
                Game theory is about making smart decisions when other people's choices affect your outcomes. 
                It's not about "gaming the system" - it's about understanding that your success often depends 
                on predicting and responding to what others will do.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {keyPrinciples.map((principle, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">{principle.title}</h3>
                  <p className="text-purple-700 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'scenarios' && (
          <div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedScenario === key
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-600">{scenario.icon}</div>
                    <h3 className="font-semibold text-gray-800">{scenario.title}</h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>

            {selectedScenario && (
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600">{scenarios[selectedScenario].icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {scenarios[selectedScenario].title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">The Situation</h4>
                    <p className="text-yellow-700">{scenarios[selectedScenario].situation}</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Game Theory Insight</h4>
                    <p className="text-green-700">{scenarios[selectedScenario].gameTheory}</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Strategic Approach</h4>
                    <ul className="text-purple-700 space-y-1">
                      {scenarios[selectedScenario].strategy.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Real-World Impact</h4>
                    <p className="text-blue-700">{scenarios[selectedScenario].realWorld}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Your Game Theory Toolkit</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-semibold mb-1">Before Any Decision</h3>
            <p className="text-gray-600">Ask: "What are others likely to do?" and "How does that affect my best choice?"</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-semibold mb-1">Gather Information</h3>
            <p className="text-gray-600">Research, network, and understand the "rules of the game" before playing.</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-semibold mb-1">Think Long-term</h3>
            <p className="text-gray-600">Your reputation and relationships compound over time. Invest in both.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTheoryGuide;
