export const mbtiDescriptions = {
  ISTJ: {
    title: "신뢰할 수 있는 관리자형",
    summary: "현실적이고 책임감이 강하며 체계적으로 일을 처리하는 성향",
    threeLines: [
      "규칙과 원칙을 중시한다.",
      "계획적으로 움직인다.",
      "신뢰도가 매우 높다."
    ],
    strengths: ["성실함", "책임감", "체계적 계획", "실수 적음"],
    weaknesses: ["융통성 부족", "감정 표현 서툼", "완고함"],
    bestMatch: ["ESFP", "ESTP"],
    worstMatch: ["ENFP", "INFP"],
    loveStyle: ["조용한 헌신형", "말보다 행동으로 사랑 표현", "관계 안정성 중요"],
    stressPoints: ["갑작스러운 변화", "계획 파괴", "애매한 지시"],
    recoveryTips: ["조용한 공간에서 휴식", "명확한 계획 재정비"],
    career: ["회계", "엔지니어", "데이터 분석", "행정직"],
    workStyle: ["구조화된 환경 선호", "정확한 업무 처리"],
    advice: "너무 원칙에 갇히지 말고 때로는 유연함을 허용해봐."
  },

  ISFJ: {
    title: "헌신적인 수호자형",
    summary: "섬세하고 따뜻하며 주어진 역할을 충실히 수행하는 성향",
    threeLines: [
      "타인을 잘 챙긴다.",
      "책임감이 강하다.",
      "조용하지만 깊은 관계를 추구한다."
    ],
    strengths: ["배려심", "책임감", "성실", "관찰력"],
    weaknesses: ["감정 숨김", "거절 어려움", "완벽주의 성향"],
    bestMatch: ["ESFP", "ESTP"],
    worstMatch: ["ENTP", "ENFP"],
    loveStyle: ["상대에게 헌신", "작은 디테일 신경 씀", "천천히 마음 열림"],
    stressPoints: ["예측 불가능한 상황", "감정 무시"],
    recoveryTips: ["혼자만의 안정 시간 필요"],
    career: ["간호사", "교사", "행정", "상담직"],
    workStyle: ["조용하게 묵묵히 처리", "사람 중심 업무에 강함"],
    advice: "너무 희생하지 말고 너 자신을 위한 시간을 가져봐."
  },

  INFJ: {
    title: "통찰력 있는 옹호자형",
    summary: "깊이 있는 인간 이해와 강한 가치관을 가진 조용한 이상주의자",
    threeLines: [
      "관계에 진심이다.",
      "통찰력이 뛰어나다.",
      "내적 신념이 강하다."
    ],
    strengths: ["직관력", "공감능력", "깊은 집중력"],
    weaknesses: ["현실 회피", "감정 과몰입", "소진 쉬움"],
    bestMatch: ["ENFP", "ENFJ"],
    worstMatch: ["ESTP", "ISTP"],
    loveStyle: ["신중하지만 깊고 진지함", "상대 성장 도와줌"],
    stressPoints: ["표면적 관계", "갈등 상황"],
    recoveryTips: ["혼자만의 휴식", "글쓰기·산책"],
    career: ["상담가", "기획자", "작가", "연구원"],
    workStyle: ["조용한 환경 선호", "깊이 있는 프로젝트에 강함"],
    advice: "내 감정을 억누르지 말고 조금은 표현해도 괜찮아."
  },

  INTJ: {
    title: "전략적 과학자형",
    summary: "분석적이고 계획적이며 문제 해결 중심의 전략가",
    threeLines: [
      "미래 계획에 강함.",
      "독립적 사고.",
      "지적 탐구 좋아함."
    ],
    strengths: ["계획력", "논리력", "독창성"],
    weaknesses: ["감정 표현 부족", "타인에게 냉정"],
    bestMatch: ["ENFP", "ENTP"],
    worstMatch: ["ESFP", "ISFP"],
    loveStyle: ["천천히 마음 열고 깊은 신뢰를 원함", "실용적 사랑 표현"],
    stressPoints: ["비효율", "감정 폭발", "통제 안 되는 상황"],
    recoveryTips: ["논리적 문제 정리", "혼자만의 시간"],
    career: ["전략가", "데이터 분석가", "개발자", "연구직"],
    workStyle: ["독립적 업무 선호", "효율 최우선"],
    advice: "가끔은 완벽보다 관계의 감정도 챙겨봐."
  },

  ISTP: {
    title: "실용적 장인형",
    summary: "논리적이고 실용적이며 문제 해결을 좋아하는 유형",
    threeLines: [
      "손으로 하는 일에 강함.",
      "즉흥적 해결 능력.",
      "자유로운 성향."
    ],
    strengths: ["위기 대처", "논리적 판단", "유연함"],
    weaknesses: ["감정 표현 어려움", "관계 단절 경향"],
    bestMatch: ["ESFJ", "ESTJ"],
    worstMatch: ["INFJ", "ENFJ"],
    loveStyle: ["말보단 행동형", "자유로운 관계 선호"],
    stressPoints: ["강한 규율", "통제"],
    recoveryTips: ["혼자 있는 시간", "간단한 취미 활동"],
    career: ["엔지니어", "개발자", "기술 직군"],
    workStyle: ["실용적 해결 선호"],
    advice: "감정 표현이 부족해도 괜찮지만, 최소한의 소통은 필요해."
  },

  ISFP: {
    title: "자유로운 예술가형",
    summary: "부드럽고 온화하면서도 예술적 감각과 자유를 추구하는 성향",
    threeLines: [
      "감성이 풍부함.",
      "상대 배려 많음.",
      "자유로운 방식 선호."
    ],
    strengths: ["감성 표현", "유연성", "예술적 감각"],
    weaknesses: ["갈등 회피", "결정 어려움"],
    bestMatch: ["ESTJ", "ESFJ"],
    worstMatch: ["ENTJ", "INTJ"],
    loveStyle: ["다정하고 조용한 로맨스", "느리지만 진심"],
    stressPoints: ["강압적 환경", "비난"],
    recoveryTips: ["예술·음악", "자유로운 휴식"],
    career: ["디자이너", "일러스트", "요리", "예술 분야"],
    workStyle: ["자율성 높은 환경 선호"],
    advice: "너의 감성은 큰 강점이야, 너무 숨기지 않아도 돼."
  },

  INFP: {
    title: "열정적인 중재자형",
    summary: "깊은 이상과 내적 가치를 중심으로 살아가는 따뜻한 성향",
    threeLines: [
      "가치관 중심.",
      "타인 공감 강함.",
      "창의적 사고."
    ],
    strengths: ["창의력", "공감능력", "진정성"],
    weaknesses: ["감정 기복", "현실 회피"],
    bestMatch: ["ENFJ", "ENTJ"],
    worstMatch: ["ESTP", "ISTP"],
    loveStyle: ["낭만적인 사랑 추구", "천천히 깊어짐"],
    stressPoints: ["갈등", "비현실성 비난"],
    recoveryTips: ["혼자만의 상상·글쓰기"],
    career: ["작가", "기획자", "상담", "디자인"],
    workStyle: ["의미 있는 일에 폭발적 몰입"],
    advice: "너무 이상만 추구하지 말고 현실도 조금씩 받아들여봐."
  },

  INTP: {
    title: "논리적인 사색가형",
    summary: "논리와 지적 호기심으로 세계를 탐구하는 분석형 사고",
    threeLines: [
      "지적 탐구 좋아함.",
      "독립적.",
      "기발한 아이디어."
    ],
    strengths: ["분석력", "창의성", "객관성"],
    weaknesses: ["우유부단", "감정 서툼"],
    bestMatch: ["ENTJ", "ENFJ"],
    worstMatch: ["ISFJ", "ESFJ"],
    loveStyle: ["조용하고 안정적 관계 선호", "감정 표현 약함"],
    stressPoints: ["과한 감정", "반복 작업"],
    recoveryTips: ["논리적 정리", "게임·유튜브"],
    career: ["개발자", "연구직", "데이터 사이언스"],
    workStyle: ["자율적 환경 선호"],
    advice: "때로는 '느낌'도 중요한 정보라는 걸 기억해줘."
  },
  ESTP: {
    title: "모험을 즐기는 사업가형",
    summary: "순간 판단력과 실행력이 뛰어나며 활동적인 문제 해결사",
    threeLines: [
      "즉흥적이고 에너지가 넘친다.",
      "위기 상황 해결 능력이 좋다.",
      "사람들과 빠르게 친해진다."
    ],
    strengths: ["순간 판단력", "사교성", "현실적 해결능력"],
    weaknesses: ["충동적", "지루함에 약함", "감정적 섬세함 부족"],
    bestMatch: ["ISFJ", "ISTJ"],
    worstMatch: ["INFJ", "INFP"],
    loveStyle: ["직설적", "데이트 활동적", "감정보단 행동"],
    stressPoints: ["지루한 반복 업무", "느린 의사결정"],
    recoveryTips: ["활동적인 취미", "즉흥 여행"],
    career: ["영업", "창업", "마케팅", "스포츠 분야"],
    workStyle: ["빠른 환경 선호", "문제 터지면 해결 먼저"],
    advice: "너무 순간의 재미에만 집중하지 말고 관계의 깊이도 챙겨봐."
  },

  ESFP: {
    title: "자유로운 연예인형",
    summary: "사람들과 함께하는 걸 좋아하고 긍정적인 분위기를 만드는 유쾌한 성향",
    threeLines: [
      "사교성이 뛰어남.",
      "현재를 즐김.",
      "따뜻한 마음씨."
    ],
    strengths: ["친화력", "유연함", "긍정성"],
    weaknesses: ["감정적", "계획 부족", "우유부단"],
    bestMatch: ["ISTJ", "ISFJ"],
    worstMatch: ["INTJ", "ENTJ"],
    loveStyle: ["애정 표현 적극적", "따뜻함", "서프라이즈 좋아함"],
    stressPoints: ["외로움", "갈등", "지속적인 통제"],
    recoveryTips: ["친한 사람들과 시간", "가벼운 활동"],
    career: ["공연 예술", "홍보", "고객 서비스"],
    workStyle: ["팀워크 좋아함", "활발한 현장형"],
    advice: "지금의 즐거움도 중요하지만, 장기 목표도 조금씩 세워봐."
  },

  ENFP: {
    title: "재기발랄한 활동가형",
    summary: "열정적이고 창의적이며 사람과 아이디어를 연결하는 유형",
    threeLines: [
      "새로운 시도 좋아함.",
      "상상력 풍부.",
      "사람을 진심으로 좋아함."
    ],
    strengths: ["공감력", "창의성", "열정"],
    weaknesses: ["산만함", "계획 부족", "감정 기복"],
    bestMatch: ["INFJ", "INTJ"],
    worstMatch: ["ISTJ", "ESTJ"],
    loveStyle: ["감정 표현 풍부", "로맨틱", "상대의 꿈 응원"],
    stressPoints: ["자유 제한", "반복된 일상"],
    recoveryTips: ["영감 주는 활동", "새로운 사람과 대화"],
    career: ["마케터", "기획자", "창작 분야", "교육"],
    workStyle: ["창의적 환경에서 폭발적인 능력"],
    advice: "시작은 잘하니까, 마무리하는 습관만 들이면 완벽해."
  },

  ENTP: {
    title: "논쟁을 즐기는 발명가형",
    summary: "새로운 아이디어를 만들고 논리적으로 재구성하는 창의적 전략가",
    threeLines: [
      "아이디어 폭발.",
      "논쟁 좋아함.",
      "지적 호기심 최고."
    ],
    strengths: ["창의성", "문제 해결", "빠른 학습"],
    weaknesses: ["여러 일 벌리기", "지루함 못 참음"],
    bestMatch: ["INFJ", "INTJ"],
    worstMatch: ["ISFJ", "ESFJ"],
    loveStyle: ["지적 교감 중시", "재밌는 대화형 연애"],
    stressPoints: ["제한된 규칙", "반복 작업"],
    recoveryTips: ["새로운 프로젝트 시작", "창의 활동"],
    career: ["창업", "전략 기획", "컨설팅", "개발자"],
    workStyle: ["새로운 문제 해결에 강함"],
    advice: "아이디어만 많지 말고 실행도 조금씩 챙겨봐야 해."
  },

  ESTJ: {
    title: "엄격한 관리자형",
    summary: "실용적이고 조직적이며 리더십이 뛰어난 현실 실행가",
    threeLines: [
      "규칙 중시.",
      "강한 추진력.",
      "현실 중심."
    ],
    strengths: ["조직력", "책임감", "효율성"],
    weaknesses: ["융통성 부족", "감정 무시"],
    bestMatch: ["ISFP", "ISTP"],
    worstMatch: ["INFP", "ENFP"],
    loveStyle: ["확실한 책임감", "안정적 관계 추구"],
    stressPoints: ["비효율적인 상황", "게으른 태도"],
    recoveryTips: ["계획 재정리", "운동"],
    career: ["관리직", "경영", "행정", "프로젝트 매니저"],
    workStyle: ["구조화된 환경에서 실력 발휘"],
    advice: "가끔은 상대 감정도 체크해주는게 관계에 큰 힘이 돼."
  },

  ESFJ: {
    title: "친절한 외교관형",
    summary: "타인을 도우며 조화를 중요시하는 따뜻한 협력자",
    threeLines: [
      "배려심 깊음.",
      "팀워크 중시.",
      "사람을 잘 챙김."
    ],
    strengths: ["사교성", "협력", "책임감"],
    weaknesses: ["감정 과몰입", "타인 눈치"],
    bestMatch: ["ISTP", "ISFP"],
    worstMatch: ["INTP", "ENTP"],
    loveStyle: ["헌신적", "작은 디테일 신경 씀"],
    stressPoints: ["갈등", "냉담함"],
    recoveryTips: ["친한 사람과 대화"],
    career: ["인사팀", "교육", "간호/돌봄", "서비스 직군"],
    workStyle: ["사람 중심 업무에 강함"],
    advice: "네가 챙기는 만큼 너도 챙김받아야 해."
  },

  ENFJ: {
    title: "정의로운 지도자형",
    summary: "따뜻한 리더십과 뛰어난 공감능력으로 조직을 이끄는 유형",
    threeLines: [
      "타인의 감정 잘 읽음.",
      "조직 조화 중시.",
      "리더십 발휘."
    ],
    strengths: ["커뮤니케이션", "조직력", "공감"],
    weaknesses: ["과한 책임감", "감정 소모"],
    bestMatch: ["INFP", "ISFP"],
    worstMatch: ["ISTP", "ESTP"],
    loveStyle: ["상대 도와주며 성장시키는 스타일"],
    stressPoints: ["비난", "조직 내 갈등"],
    recoveryTips: ["휴식·명상", "가까운 사람과 대화"],
    career: ["교육", "리더십 분야", "상담", "HR"],
    workStyle: ["조직 조화 잘 맞춤"],
    advice: "모든 사람을 돕지 않아도 괜찮아. 너도 돌봐야 해."
  },

  ENTJ: {
    title: "대담한 지도자형",
    summary: "논리와 전략을 바탕으로 시스템을 구축하고 목표를 추진하는 리더형",
    threeLines: [
      "목표 지향적.",
      "전략적 사고.",
      "추진력 강함."
    ],
    strengths: ["리더십", "결단력", "문제 해결"],
    weaknesses: ["직설적", "감정 공감 부족"],
    bestMatch: ["INFP", "INTP"],
    worstMatch: ["ISFP", "ESFP"],
    loveStyle: ["실용적이고 책임감 있는 관계", "목표 지향 데이트"],
    stressPoints: ["비효율", "준비 안 된 사람들"],
    recoveryTips: ["목표 재정비", "운동"],
    career: ["경영", "전략기획", "컨설팅", "CEO"],
    workStyle: ["명확한 목표 하에서 성과 발휘"],
    advice: "사람은 숫자가 아니야. 감정도 전략의 일부라는 걸 기억해."
  }

};
