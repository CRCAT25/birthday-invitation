import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, Cake, Music, MapPin, Calendar, Clock } from 'lucide-react';

interface HeartAnimation {
    id: number;
    left: number;
    delay: number;
}

interface BirthdayInfo {
    name: string;
    date: string;
    time: string;
    location: string;
    address: string;
    message: string;
}

export default function BirthdayInvitation() {
    const [showContent, setShowContent] = useState<boolean>(false);
    const [hearts, setHearts] = useState<HeartAnimation[]>([]);
    const [playMusic, setPlayMusic] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts(prev => [
                ...prev.slice(-15),
                {
                    id: Date.now(),
                    left: Math.random() * 100,
                    delay: Math.random() * 2
                }
            ]);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const birthdayInfo: BirthdayInfo = {
        name: "Em Yêu",
        date: "15 tháng 12, 2024",
        time: "19:00",
        location: "Nhà hàng The Garden",
        address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
        message: "Một năm nữa lại đến, một năm nữa em lại thêm xinh đẹp và đáng yêu hơn. Anh muốn được ở bên em trong ngày đặc biệt này và mang đến những kỷ niệm tuyệt vời nhất!"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
            {/* Floating hearts animation */}
            {hearts.map((heart: HeartAnimation) => (
                <Heart
                    key={heart.id}
                    className="absolute text-pink-400 opacity-60 animate-float"
                    style={{
                        left: `${heart.left}%`,
                        bottom: '-50px',
                        animationDelay: `${heart.delay}s`,
                        animation: 'floatUp 6s ease-in-out forwards'
                    }}
                    size={24}
                />
            ))}

            <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2) rotate(180deg);
          }
        }
        .animate-float {
          animation: floatUp 6s ease-in-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
      `}</style>

            <div className="container mx-auto px-4 py-8 relative z-10">
                {!showContent ? (
                    // Opening envelope
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="text-center">
                            <div className="mb-8 relative inline-block">
                                <Gift className="w-32 h-32 text-pink-500 animate-pulse-slow" />
                                <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-sparkle" />
                                <Sparkles className="w-6 h-6 text-yellow-400 absolute -bottom-2 -left-2 animate-sparkle" style={{ animationDelay: '1s' }} />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 animate-pulse-slow">
                                Bạn Có Một Lời Mời Đặc Biệt! 🎉
                            </h1>
                            <p className="text-xl text-gray-700 mb-8">
                                Nhấn vào quà để mở nhé...
                            </p>
                            <button
                                onClick={() => setShowContent(true)}
                                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-2xl"
                            >
                                Mở Quà 🎁
                            </button>
                        </div>
                    </div>
                ) : (
                    // Invitation content
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="flex justify-center mb-4">
                                    <Cake className="w-20 h-20 text-pink-500 animate-pulse-slow" />
                                </div>
                                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                                    Happy Birthday!
                                </h2>
                                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                                    {birthdayInfo.name} 💕
                                </h3>
                                <div className="flex justify-center gap-2 mb-4">
                                    <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" />
                                    <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" style={{ animationDelay: '0.2s' }} />
                                    <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                                <p className="text-lg text-gray-700 leading-relaxed text-center italic">
                                    "{birthdayInfo.message}"
                                </p>
                            </div>

                            {/* Event Details */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                                    <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Ngày</p>
                                        <p className="text-gray-600">{birthdayInfo.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                                    <Clock className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Thời gian</p>
                                        <p className="text-gray-600">{birthdayInfo.time}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
                                    <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Địa điểm</p>
                                        <p className="text-gray-600">{birthdayInfo.location}</p>
                                        <p className="text-sm text-gray-500 mt-1">{birthdayInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                    <Heart className="w-5 h-5 fill-current" />
                                    Chắc chắn sẽ đến!
                                </button>
                                <button
                                    onClick={() => setPlayMusic(!playMusic)}
                                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                                >
                                    <Music className="w-5 h-5" />
                                    {playMusic ? 'Đang phát nhạc 🎵' : 'Phát nhạc 🎵'}
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 text-center">
                                <p className="text-gray-600 text-sm">
                                    Được tạo với ❤️ từ người yêu em
                                </p>
                                <div className="flex justify-center gap-2 mt-4">
                                    <Sparkles className="w-4 h-4 text-yellow-500 animate-sparkle" />
                                    <p className="text-xs text-gray-500">
                                        Không thể chờ đợi để được gặp em! 🥰
                                    </p>
                                    <Sparkles className="w-4 h-4 text-yellow-500 animate-sparkle" style={{ animationDelay: '1s' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}