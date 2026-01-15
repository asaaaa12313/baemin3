import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CountUp } from '@/components/ui/motion/CountUp';

const reviews = [
    {
        name: "OO떡볶이 사장님",
        time: "오후 12:42",
        message: "팀장님, 오늘 점심 주문 터졌어요! 🔥\n리뷰 배너만 바꿨는데 클릭율이 확실히 다르네요 ㄷㄷ",
        reply: "다행입니다 사장님! ㅎㅎ\n저녁 장사도 기대해보시죠!",
        summary: "\"리뷰 배너만 바꿨는데 클릭율이 달라지네요.\""
    },
    {
        name: "OO치킨 사장님",
        time: "오후 11:15",
        message: "알려주신대로 메뉴 순서만 바꿨는데\n객단가가 3천원이나 올랐어요 신기하네요",
        reply: "세트 메뉴가 눈에 확 들어와서 그럴겁니다 :)\n주말엔 더 오를거예요!",
        summary: "\"메뉴 순서만 바꿨는데 객단가가 올랐어요.\""
    },
    {
        name: "OO버거 사장님",
        time: "오전 10:30",
        message: "소구점 잡아서 글 수정하니까\n리뷰에 '설명보고 시켰다'는 말이 진짜 달리네요",
        reply: "고객이 듣고 싶어하는 말을 적는게 핵심이죠!\n축하드립니다 사장님!",
        summary: "\"리뷰에 '설명보고 시켰다'는 말이 달리네요.\""
    },
    {
        name: "OO피자 사장님",
        time: "오후 05:20",
        message: "깃발 위치 옮기고는 컨설팅대로 했더니\n어제 매출 역대 최고 찍었습니다 ㅠㅠ",
        reply: "효율 좋은 자리로 잘 옮기셨어요.\n이제 단골 관리만 좀 더 신경써주세요!",
        summary: "\"컨설팅대로 했더니 어제 매출 역대 최고 찍었습니다.\""
    },
    {
        name: "OO카페 사장님",
        time: "오후 02:10",
        message: "경쟁사 분석한거 보고 충격받아서..\n바로 가격이랑 구성 바꿨더니 주문 쏟아지네요",
        reply: "빈틈을 잘 파고드신 덕분입니다.\n이대로만 유지하시죠!",
        summary: "\"가격이랑 구성 바꿨더니 주문이 쏟아지네요.\""
    }
];

const graphs = [
    {
        title: "OO족발 사장님",
        rate: 123,
        desc: "\"깃발 위치 옮기고는 컨설팅대로 했더니 매출 2배 뛰었습니다.\"",
        bars: [30, 40, 35, 50, 70, 90]
    },
    {
        title: "OO보쌈 사장님",
        rate: 210,
        desc: "\"야식 카테고리 1위 찍었습니다. 진작 할 걸 그랬네요.\"",
        bars: [20, 25, 30, 45, 80, 100]
    },
    {
        title: "OO횟집 사장님",
        rate: 85,
        desc: "\"비수기라 걱정했는데 작년 대비 매출이 오히려 늘었어요.\"",
        bars: [40, 35, 45, 50, 60, 85]
    },
    {
        title: "OO마라탕 사장님",
        rate: 150,
        desc: "\"신규 고객 유입이 눈에 띄게 늘었어요. 재주문도 좋네요.\"",
        bars: [20, 30, 40, 60, 75, 95]
    },
    {
        title: "OO찜닭 사장님",
        rate: 98,
        desc: "\"깃발 갯수는 줄였는데 노출수는 더 늘었습니다. 신기하네요.\"",
        bars: [30, 35, 40, 50, 70, 85]
    }
];

function ReviewCard({ item }: { item: typeof reviews[0] }) {
    return (
        <Card className="flex-shrink-0 w-[400px] bg-white border border-gray-100 shadow-xl p-8 mx-4">
            <div className="flex items-center gap-2 mb-8 text-gray-500 font-medium">
                <MessageCircle className="w-5 h-5" />
                <span>카카오톡 실제 후기</span>
            </div>
            <div className="bg-[#bacee0] p-6 rounded-2xl space-y-4 mb-8 font-sans text-sm shadow-inner min-h-[180px] flex flex-col justify-center">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-[14px] bg-gray-300 flex-shrink-0"></div>
                    <div className="flex flex-col gap-1 items-start max-w-[85%]">
                        <div className="text-gray-600 text-xs px-1">{item.name}</div>
                        <div className="bg-white p-3.5 rounded-xl text-gray-900 shadow-sm rounded-tl-none relative leading-relaxed whitespace-pre-line">
                            {item.message}
                        </div>
                        <span className="text-[10px] text-gray-500 px-1">{item.time}</span>
                    </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                    <div className="flex flex-col gap-1 items-end max-w-[85%]">
                        <div className="bg-[#fef01b] p-3.5 rounded-xl shadow-sm rounded-tr-none text-black leading-relaxed whitespace-pre-line">
                            {item.reply}
                        </div>
                    </div>
                </div>
            </div>
            <p className="font-bold text-deep-navy text-lg leading-tight">
                {item.summary}
            </p>
        </Card>
    );
}

function GraphCard({ item }: { item: typeof graphs[0] }) {
    return (
        <Card className="flex-shrink-0 w-[400px] h-full relative overflow-hidden bg-white border border-gray-100 shadow-xl p-8 mx-4">
            <div className="flex items-center justify-between mb-12">
                <div className="font-medium text-gray-500">배민 사장님 광장</div>
                <div className="text-[#00C73C] font-bold bg-[#E5F9ED] px-3 py-1.5 rounded-lg text-sm flex items-center gap-1">
                    +<CountUp to={item.rate} />% 상승
                </div>
            </div>
            <div className="h-52 flex items-end gap-3 mb-8 px-2">
                {item.bars.map((h, i) => (
                    <div
                        key={i}
                        className={`w-1/6 rounded-t-lg relative group ${i === item.bars.length - 1
                                ? 'bg-vivid-orange shadow-[0_-4px_20px_rgba(255,87,34,0.3)]'
                                : i === item.bars.length - 2
                                    ? 'bg-[#9CA3AF]'
                                    : 'bg-gray-100'
                            }`}
                        style={{ height: `${h}%` }}
                    >
                        {i === item.bars.length - 1 && (
                            <div className="absolute top-2 w-full text-center text-white font-bold text-xs">Best</div>
                        )}
                    </div>
                ))}
            </div>
            <p className="font-bold text-deep-navy text-lg leading-tight mb-1">{item.desc}</p>
            <p className="text-gray-500 text-sm">{item.title}</p>
        </Card>
    );
}

export function Evidence() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl font-bold text-deep-navy md:text-5xl">
                    사장님들의 매출 그래프가<br />
                    <span className="text-vivid-orange">증명합니다.</span>
                </h2>
            </div>

            {/* Marquee Row 1: Reviews */}
            <div className="mb-8 overflow-hidden">
                <motion.div
                    className="flex w-max"
                    animate={{ x: [0, -2160] }} // 400px + 32px gap * 5 items approx
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {[...reviews, ...reviews, ...reviews].map((item, i) => (
                        <ReviewCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2: Graphs */}
            <div className="overflow-hidden">
                <motion.div
                    className="flex w-max"
                    animate={{ x: [-2160, 0] }} // Reverse direction (Need to adjust start position if we want consistent flow)
                    // Actually reverse direction usually starts negative and goes to 0 or starts 0 and goes positive?
                    // Better: initial x: -2160, animate to 0.
                    // Let's try consistently flowing left for both but offset? Or right?
                    // Let's do Left for top, Right for bottom.
                    // Right for bottom: from -ItemWidth*Total to 0?
                    // 5 items * 432px = 2160px.
                    // So start at -2160 and go to 0.
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear",
                    }}
                >
                    {[...graphs, ...graphs, ...graphs].map((item, i) => (
                        <GraphCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
