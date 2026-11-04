export interface ApartmentComplex {
  id: string;
  name: string;
  district: '위례송파' | '위례성남' | '위례하남';
  subArea: string;
  pipeFeature: string;
  recommendedService: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  complex: string;
  problem: string;
  solution: string;
  tools: string[];
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDetails: string[];
  afterDetails: string[];
}

export const SITE_INFO = {
  brandName: '싱크마스터',
  brandEn: 'SinkMaster',
  phone: '010-5024-8204',
  phoneFormatted: '010-5024-8204',
  phoneTel: 'tel:01050248204',
  smsTel: 'sms:01050248204',
  ownerName: '현미경',
  legalPhone: '010-2796-2080',
  businessNumber: '849-13-02664',
  email: 'jjcow0518@naver.com',
  areaSummary: '위례신도시 전 지역(송파·성남·하남) 20~30분 긴급 출동',
  arrivalEstimate: '20~30분 내 긴급 출동',
  hours: '24시간 연중무휴 상시 대기 (야간·주말·공휴일 정상 출동)',
  promiseGuarantee: '하청 없는 100% 대표 직접 시공 · 못 뚫으면 0원',
};

export const PROMISES = [
  {
    num: '01',
    title: '100% 대표 직접 방문 시공',
    desc: '중개 수수료나 무책임한 외주·하청 기사 파견 없이, 대표 본인이 처음 상담부터 시공 후 내시경 검수까지 끝까지 책임집니다.',
    highlight: '외주 수수료 거품 없는 정직한 견적',
  },
  {
    num: '02',
    title: '못 뚫으면 0원 완벽 보장',
    desc: '최신 초고화질 배관 내시경과 전문 장비로 원인을 진단하며, 싱크대 막힘을 해결하지 못하면 출장비와 점검비를 단 1원도 받지 않습니다.',
    highlight: '출장비·내시경 점검비 일체 0원 원칙',
  },
  {
    num: '03',
    title: '20~30분 신속 긴급 출동',
    desc: '위례신도시 전역(송파·성남·하남) 전 권역을 상시 집중 운영하여 야간, 주말, 공휴일에도 지체 없이 20~30분 내 신속 방문합니다.',
    highlight: '위례 전역 24시간 긴급 대응',
  },
];

export const SERVICES = [
  {
    id: 'unclog',
    title: '싱크대 막힘 & 역류 뚫음',
    subtitle: '단순 관통이 아닌 배관 내벽에 흡착된 기름 슬러지를 100% 분쇄·흡입 세척',
    items: [
      '초고출력 산업용 석션 흡입으로 슬러지 및 이물질 1차 제거',
      '고속 회전 플렉스 샤프트 체인 스케일링으로 배관 내벽 완전 복원',
      'Full HD 배관 내시경 정밀 검사 (시공 전/후 고객 직접 모니터 확인)',
      '다량 통수 테스트 및 하부장 마루 역류 방지 안심 패킹 시공',
    ],
    badge: '긴급 출동 다빈도',
  },
  {
    id: 'faucet',
    title: '수전 교체 & 설치 대행',
    subtitle: '노후 누수 수전 교체부터 직접 구매하신 프리미엄·해외직구 수전 완벽 설치',
    items: [
      '싱크대 원홀, 거위목, 폭포 수전 등 고급형 수전 교체',
      '고객 직접 구매(쿠팡, 네이버, 해외직구, 이케아 등) 수전 설치 대행',
      '하부장 앵글밸브 고착 점검 및 고압 호스 누수 정밀 테스트',
      '상판 흔들림 없는 완벽 밀착 체결 및 냉·온수 수압 밸런스 조정',
    ],
    badge: '인터넷 직구 설치 환영',
  },
  {
    id: 'drain',
    title: '배수통 & 호스 전면 교체',
    subtitle: '곰팡이와 악취, 하부장 미세 누수를 유발하는 노후 배수통을 위생적으로 전면 교체',
    items: [
      '변색과 냄새 배임 없는 최고급 SUS304 올스텐 배수통 교체',
      '하수구 냄새 및 날벌레 역류를 차단하는 특수 방취 트랩 시공',
      '음식물 슬러지가 고이지 않는 위생형 전용 내열 배수 호스',
      '싱크볼 하단 체결부 방수 실링 및 하부장 누수 완벽 밀폐',
    ],
    badge: 'SUS304 위생 올스텐',
  },
];

export const WIRYE_COMPLEXES: ApartmentComplex[] = [
  // ==========================================
  // 1. 위례 송파권 (서울 송파구 위례동 일대)
  // ==========================================
  {
    id: 'sp-tc',
    name: '송파 더센트레',
    district: '위례송파',
    subArea: '송파구 위례동 (22단지)',
    pipeFeature: '위례 대표 1,800여 세대 대단지, 주방 싱크대 하부 횡주관 슬러지 완벽 세척',
    recommendedService: '플렉스 샤프트 스케일링 · SUS304 올스텐 배수통 교체',
  },
  {
    id: 'sp-dream',
    name: '송파 꿈에그린 (위례 24단지)',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '싱크볼 하단 배수통 체결부 미세 누수 점검 및 하부장 악취 차단 트랩',
    recommendedService: '올스텐 배수통 교체 · 싱크대 원홀/거위목 수전 설치',
  },
  {
    id: 'sp-prugio',
    name: '위례 송파 푸르지오',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '입주 연차 누적으로 주방 횡주관 기름 슬러지 집중 스케일링 및 내시경 진단',
    recommendedService: '배관 내시경 진단 · SUS304 올스텐 배수통 교체',
  },
  {
    id: 'sp-lake',
    name: '송파 레이크파크 호반써밋 (1·2차)',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '장지천 인접 북위례 신축 구조, 싱크대 하부장 공간 최적화 수전 시공',
    recommendedService: '샤프트 배관 스케일링 · 고급 거위목 수전 교체',
  },
  {
    id: 'sp-central-prg',
    name: '위례 중앙 푸르지오 (1·2단지)',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '위례 트랜짓몰 중심 주상복합 배관 맞춤 고출력 석션 및 내벽 청소',
    recommendedService: '플렉스 샤프트 스케일링 · 직구 수전 설치대행',
  },
  {
    id: 'sp-ipark1',
    name: '위례 아이파크 1차',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '주방 싱크대 꺾임 엘보 구간 음식물 찌꺼기 고착 관통 및 역류 방지',
    recommendedService: '내시경 배관 관통 · 방취 방충 트랩 시공',
  },
  {
    id: 'sp-ipark2',
    name: '위례 아이파크 2차',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '원홀 수전 카트리지 누수 정밀 수리 및 주방 하부 앵글밸브 점검',
    recommendedService: '고급 수전 교체 · 고출력 석션 뚫음',
  },
  {
    id: 'sp-hilla',
    name: '힐스테이트 송파위례',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '주방 대형 아일랜드 싱크대 배수관 구배 확인 및 기름 슬러지 분쇄',
    recommendedService: '플렉스 샤프트 체인 스케일링 · 올스텐 배수통',
  },
  {
    id: 'sp-wise',
    name: '송파 와이즈더샵',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '주방 배수구 막힘 신속 뚫음 및 하부 주름관 냄새 역류 완벽 방지',
    recommendedService: '샤프트 스케일링 · SUS304 올스텐 배수통',
  },
  {
    id: 'sp-rich',
    name: '송파 위례리슈빌 퍼스트클래스',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '북위례 신축 고급형 주방 싱크볼 맞춤 무타공/정밀 수전 설치 대행',
    recommendedService: '직구 수전 설치대행 · 하부 배수 누수 점검',
  },
  {
    id: 'sp-fs23',
    name: '위례 포레샤인 23단지',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '주방 배수 호스 경화 및 기름 응고 막힘 신속 스케일링 복원',
    recommendedService: '내시경 배관 세척 · 악취 방지 전용 캡 시공',
  },
  {
    id: 'sp-fs18',
    name: '위례 포레샤인 18단지',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '싱크대 물 빠짐 지연 해소 및 주방 하부장 곰팡이 냄새 원인 차단',
    recommendedService: '고출력 석션 뚫음 · 위생 배수구 교체',
  },
  {
    id: 'sp-fs13',
    name: '위례 포레샤인 13단지',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '싱크대 하부 앵글밸브 고압 온냉수 누수 점검 및 배관 세척',
    recommendedService: '싱크대 역류 해결 · 거위목 수전 교체',
  },
  {
    id: 'sp-wmirin1',
    name: '북위례 우미린 1차',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '북위례 신축 대단지 주방 드레인관 초기 시멘트 잔여물 및 유지방 점검',
    recommendedService: '내시경 정밀 검사 · 프리미엄 수전 장착',
  },
  {
    id: 'sp-wmirin2',
    name: '북위례 우미린 2차 (더하이츠)',
    district: '위례송파',
    subArea: '송파구 위례동',
    pipeFeature: '수전 교체 및 싱크볼 하단 체결부 방수 실링 완벽 작업',
    recommendedService: '고급 수전 교체 · 다량 통수 검수',
  },

  // ==========================================
  // 2. 위례 성남권 (성남시 수정구 창곡동 일대)
  // ==========================================
  {
    id: 'sn-xi',
    name: '위례자이',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '창곡천 조망 위례 랜드마크 단지, 싱크대 하부 횡주관 기름 슬러지 완벽 세척',
    recommendedService: '플렉스 샤프트 스케일링 · 프리미엄 수전 교체',
  },
  {
    id: 'sn-central-xi',
    name: '위례 센트럴자이 (자연앤자이)',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '1,400여 세대 다빈도 출동 단지, 주방 싱크대 하부 역류 긴급 해결',
    recommendedService: '고출력 석션 흡입 · 하부장 누수 완벽 밀폐',
  },
  {
    id: 'sn-jayeon-raemian',
    name: '위례 자연앤래미안e편한세상',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '위례 최대 세대수 단지, 주방 배관 꺾임부 기름 슬러지 정밀 분쇄',
    recommendedService: '배관 내시경 검수 · 샤프트 스케일링',
  },
  {
    id: 'sn-hill',
    name: '힐스테이트 위례',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '주방 대형 싱크볼 규격 맞춤 위생 SUS304 올스텐 배수통 교체',
    recommendedService: '올스텐 배수통 교체 · 노후 수전 교체',
  },
  {
    id: 'sn-raemian',
    name: '래미안 위례',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '수변공원 인접 명품 단지, 주방 싱크대 하부 앵글밸브 및 배수구 점검',
    recommendedService: '초고화질 내시경 진단 · 0원 보장 뚫음',
  },
  {
    id: 'sn-artriver12',
    name: '위례 아트리버 푸르지오 (1·2단지)',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '창곡천 카페거리 인접 단지 배관 유지방 세척 및 수압 점검',
    recommendedService: '싱크대 막힘 해결 · 고객 구매 수전 설치대행',
  },
  {
    id: 'sn-gwell',
    name: '위례 지웰푸르지오',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '주거형 오피스텔 배수관 유속 개선 및 악취 차단 트랩 기밀 시공',
    recommendedService: '악취 차단 트랩 · 배수통 호스 전면 교체',
  },
  {
    id: 'sn-thehill55',
    name: '위례 더힐55 (구 위례푸르지오)',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '대형 평형 주방 싱크대 배관 경사도 점검 및 내벽 찌꺼기 세척',
    recommendedService: '정밀 내시경 스케일링 · 폭포/거위목 수전 교체',
  },
  {
    id: 'sn-hoban',
    name: '위례 호반베르디움',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '장기 누적 기름때로 인한 싱크볼 물고임 완전 관통 및 세척',
    recommendedService: '플렉스 샤프트 스케일링 · 올스텐 배수통',
  },
  {
    id: 'sn-wnam-prg',
    name: '위례역 푸르지오 (4·5·6단지)',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '남위례역 역세권 단지, 싱크대 역류 방지 캡 체결 및 통수 점검',
    recommendedService: '역류 방지 트랩 · 싱크대 뚫음',
  },
  {
    id: 'sn-bomi',
    name: '위례 보미리즌빌',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '주방 원홀 수전 흔들림 보강 및 배수관 악취 완전 차단',
    recommendedService: '원홀 수전 설치 · 위생 배수통 시공',
  },
  {
    id: 'sn-shin-rivera',
    name: '위례 신안인스빌리베라',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '싱크대 하부 배수 호스 경화 누수 방지 및 스테인리스 배수통 장착',
    recommendedService: 'SUS304 올스텐 교체 · 배관 스케일링',
  },
  {
    id: 'sn-seoilro',
    name: '위례 서일로마을 카페거리 상가주택',
    district: '위례성남',
    subArea: '성남시 수정구 창곡동',
    pipeFeature: '상가주택 싱크대 유지방 대용량 슬러지 고출력 분쇄 및 석션',
    recommendedService: '플렉스 샤프트 체인 스케일링 · 통수 복원',
  },

  // ==========================================
  // 3. 위례 하남권 (하남시 학암동·감이동 일대)
  // ==========================================
  {
    id: 'hn-lotte',
    name: '위례 롯데캐슬',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '하남 위례 1,600여 세대 랜드마크, 주방 메인 드레인관 슬러지 완벽 제거',
    recommendedService: '플렉스 샤프트 스케일링 · SUS304 올스텐 배수통',
  },
  {
    id: 'hn-floriche',
    name: '플로리체 위례 (엠코타운 플로리체)',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '노후 플라스틱 배수통 변색 및 미세 악취 역류 전면 차단',
    recommendedService: '위생 SUS304 올스텐 배수통 · 방취 트랩',
  },
  {
    id: 'hn-centroel',
    name: '위례 엠코타운 센트로엘',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '주방 수전 카트리지 누수 수리 및 싱크볼 하부 수압 밸런스 조정',
    recommendedService: '고급 거위목 수전 교체 · 누수 정밀 테스트',
  },
  {
    id: 'hn-shin-astro',
    name: '위례 신안인스빌 아스트로',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '싱크볼 하부 공간 협소 구간 수전 밸브 정밀 탈부착 시공',
    recommendedService: '직구 수전 설치대행 · 앵글밸브 누수 교체',
  },
  {
    id: 'hn-greenpark',
    name: '위례 그린파크 푸르지오',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '청량산 숲 인접 단지 배수 라인 점검 및 싱크대 누수 해결',
    recommendedService: '내시경 진단 · 미해결 0원 보장 뚫음',
  },
  {
    id: 'hn-foret-xi',
    name: '위례 포레자이 (숲속자이)',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '북위례 신축 단지 고급 수전 체결 및 배수 구배 정밀 테스트',
    recommendedService: '고급 거위목 수전 교체 · 누수 완벽 테스트',
  },
  {
    id: 'hn-hill-north',
    name: '힐스테이트 북위례',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '대형 주방 아일랜드 싱크대 배수 유속 점검 및 악취 방지 캡 체결',
    recommendedService: '정밀 내시경 스케일링 · 수전 설치대행',
  },
  {
    id: 'hn-joongheung',
    name: '위례 중흥S-클래스',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '주방 싱크대 배수 배관 유지방 점검 및 다량 통수 테스트',
    recommendedService: '싱크대 막힘 해결 · SUS304 올스텐 교체',
  },
  {
    id: 'hn-booyoung',
    name: '위례 포레스트 사랑으로 부영',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '장기 사용으로 배관 바닥에 퇴적된 기름 슬러지 완전 흡입',
    recommendedService: '고출력 석션 · 플렉스 샤프트 스케일링',
  },
  {
    id: 'hn-punggyeong',
    name: '위례 제일풍경채',
    district: '위례하남',
    subArea: '하남시 학암동',
    pipeFeature: '주방 수전 수압 안정화 및 싱크볼 하단 배수통 위생 시공',
    recommendedService: '위생 배수통 교체 · 프리미엄 거위목 수전',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    category: '배관 샤프트 스케일링',
    complex: '송파 더센트레 · 위례자이 · 힐스테이트 위례',
    title: '기름 슬러지로 꽉 막힌 싱크대 배관 스케일링 전/후',
    problem: '다년간 누적된 조리 기름과 음식물 유지방이 단단하게 굳어 싱크대 물이 내려가지 못하고 하부장 마루바닥으로 역류하던 심각한 현장',
    solution: '초고출력 산업용 석션으로 고인 물을 제거한 뒤, 최신 리지드 플렉스 샤프트로 배관 내벽에 흡착된 단단한 기름 덩어리를 100% 분쇄 후 Full HD 내시경으로 깨끗한 통수 확인',
    tools: ['리지드 플렉스 샤프트', '고출력 산업용 석션', 'Full HD 배관 내시경'],
    beforeImage: '/assets/aistudio/_______________d526bb81.jpg',
    afterImage: '/assets/aistudio/______________daa8df9d.jpg',
    beforeLabel: '배관 직경 90% 이상 기름 슬러지 폐쇄 (내시경 진단)',
    afterLabel: '플렉스 샤프트 스케일링 후 100% 통수 복원 (내시경 3.0M)',
    beforeDetails: [
      '배관 직경이 거의 막혀 1리터만 내려도 하부장으로 물이 역류',
      '하부장 바닥 누수로 마루 변색 및 아랫집 누수 우려 심각',
      '단순 뚫어뻥/화학 약품으로 전혀 해결 불가능한 상태',
    ],
    afterDetails: [
      '플렉스 샤프트 고속 회전 체인으로 슬러지 완전 분쇄 복원',
      '싱크볼 만수 후 일시 대량 배수 테스트 시 역류 없이 쾌속 통수',
      '고객님과 함께 내시경 모니터로 깨끗해진 배관 내벽 실시간 확인',
    ],
  },
  {
    id: 'case-2',
    category: '올스텐 배수통 & 트랩 교체',
    complex: '위례 롯데캐슬 · 위례 송파 푸르지오 · 플로리체 위례',
    title: '곰팡이 핀 노후 플라스틱 배수통 → 위생 SUS304 올스텐 배수통 교체',
    problem: '오래된 플라스틱 배수통 틈새 곰팡이와 찌든 때, 경화된 고무 패킹으로 인한 하부장 미세 누수 및 주방 악취 발생',
    solution: '부식과 냄새 배임이 전혀 없는 정품 SUS304 스테인리스 배수통과 악취 차단 전용 트랩, 특수 내열 배수 호스로 전면 교체 시공',
    tools: ['SUS304 올스텐 배수통', '방취 방충 트랩', '고강도 내열 호스'],
    beforeImage: '/assets/aistudio/____________682e95b7.JPG',
    afterImage: '/assets/aistudio/___________7d998eb0.JPG',
    beforeLabel: '플라스틱 오염 및 패킹 틈새 누수·악취',
    afterLabel: '반영구적 SUS304 올스텐 교체 및 냄새 완전 차단',
    beforeDetails: [
      '세균 번식 및 닦아도 지워지지 않는 기름때 찌든 오염',
      '오래된 호스 이음새에서 물방울이 뚝뚝 떨어져 하부장 곰팡이 유발',
      '하수구 냄새가 싱크대 위로 솔솔 올라와 두통 유발',
    ],
    afterDetails: [
      '물때가 끼지 않는 위생적인 올 스테인리스(SUS304) 본체',
      '특수 방취 트랩 장착으로 하수구 냄새 및 벌레 100% 차단',
      '싱크볼 하단 방수 실링 체결로 누수 걱정 영구 해소',
    ],
  },
  {
    id: 'case-3',
    category: '수전 교체 & 설치 대행',
    complex: '위례 센트럴자이 · 위례 아이파크 · 위례 아트리버 푸르지오',
    title: '노후 누수 수전 → 모던 거위목/원홀 수전 깔끔 교체',
    problem: '수전 카트리지 마모로 손잡이 틈새 물이 새어 상판 물고임 발생 및 오래된 수전의 호스 부식으로 녹물 발생',
    solution: '기존 노후 수전을 싱크볼 손상 없이 안전 탈거 후, 상판 흔들림 방지 보강 브라켓 장착 및 냉·온수 앵글밸브 완벽 체결, 수압 및 누수 정밀 점검 완료',
    tools: ['싱크대 전용 렌치', '수압 측정 밸브', '방수 실링 테이프'],
    beforeImage: '/assets/aistudio/_______________d09a1aee.JPG',
    afterImage: '/assets/aistudio/______________8556e1dc.JPG',
    beforeLabel: '기존 수전 카트리지 마모 누수 및 부식',
    afterLabel: '신형 프리미엄 거위목 수전 교체 및 완벽 누수 검수',
    beforeDetails: [
      '헤드 호스 인출부 부식 및 손잡이 틈새 물샘 발생',
      '싱크대 상판 하부 목대 틈새로 물이 스며들어 목재 부풀림',
      '인터넷/직구 구매 수전 설치 규격 문제로 자가 교체 난항',
    ],
    afterDetails: [
      '흔들림 없이 견고한 원홀 직결 체결 완료',
      '직수·스프레이 2단 분사 및 최적 냉온수 수압 조절',
      '시공 후 휴지로 닦아 1방울의 미세 누수도 없음 완벽 확인',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: 'STEP 01',
    title: '전화 상담 & 긴급 접수',
    subtitle: '아파트 단지명과 증상 확인 (24시간 접수)',
    desc: '거주하시는 위례 아파트 단지명과 싱크대 막힘, 역류, 수전 누수 등 현재 겪고 계신 불편을 말씀해 주시면 예상 원인과 정확한 방문 도착 시간을 안내해 드립니다.',
  },
  {
    step: 'STEP 02',
    title: '대표 현장 방문 & 내시경 진단',
    subtitle: '외주 없이 대표 직방문, 전문 내시경 진단',
    desc: '하청 기사 없이 대표가 직접 방문하여 배관 내시경 등 첨단 장비로 문제 원인을 정확히 점검하고 시공 전 정직한 표준 견적을 안내합니다.',
  },
  {
    step: 'STEP 03',
    title: '정직한 시공 & 통수 확인',
    subtitle: '샤프트 스케일링 및 수전·배수통 정석 시공',
    desc: '플렉스 샤프트 스케일링, 고출력 석션, 올스텐 배수통 교체를 원칙대로 꼼꼼히 작업한 뒤 고객님 입회 하에 대량 통수와 누수 여부를 직접 확인합니다.',
  },
  {
    step: 'STEP 04',
    title: '미해결 시 0원 보장',
    subtitle: '문제를 해결하지 못하면 비용 0원 결제',
    desc: '싱크마스터의 절대 원칙: 막힘을 시원하게 해결하지 못하면 출장비, 내시경 점검비를 포함하여 단 1원의 비용도 청구하지 않습니다.',
  },
];

export const FAQS = [
  {
    q: '정말 싱크대 막힘을 뚫지 못하면 비용을 전혀 안 받나요?',
    a: '네, 100% 사실입니다. 싱크마스터는 고객님께 책임을 전가하지 않는 "미해결 시 0원" 원칙을 철저히 준수합니다. 기술력에 대한 자신감이자 고객님과의 정직한 약속으로, 원인을 해결하지 못했을 경우 출장비와 내시경 점검비를 단 1원도 청구하지 않습니다.',
  },
  {
    q: '위례신도시 전 지역 출동이 가능한가요?',
    a: '네, 당연합니다! 송파 더센트레, 송파 꿈에그린, 위례자이, 위례 센트럴자이, 힐스테이트 위례, 자연앤래미안, 위례 롯데캐슬, 플로리체 위례 등 송파구·성남시·하남시 관할 위례신도시 40여 개 모든 단지를 상시 집중 운영하여 20~30분 내 신속 방문합니다.',
  },
  {
    q: '야간이나 주말, 공휴일에도 즉시 출동해 주시나요?',
    a: '네, 24시간 연중무휴 상시 대기하고 있습니다. 싱크대 역류는 방치할 경우 마루 바닥 훼손이나 아랫집 천장 누수로 이어질 수 있는 긴급 사안입니다. 밤늦은 시간이나 주말이라도 부담 없이 바로 전화해 주시면 신속하게 방문합니다.',
  },
  {
    q: '인터넷(쿠팡, 네이버)이나 해외직구로 산 수전도 설치해 주시나요?',
    a: '네, 고객님께서 직접 준비하신 싱크대 수전의 설치 대행도 전문적으로 진행합니다. 국내 표준 규격 수전은 물론 수입 직구 수전, 이케아 수전 등도 하부장 앵글밸브 상태 점검과 완벽한 누수 테스트를 거쳐 안전하게 설치해 드립니다.',
  },
  {
    q: 'SUS304 올스텐 배수통이 일반 플라스틱 배수통보다 좋은 이유가 무엇인가요?',
    a: '기존 플라스틱 배수통은 사용하다 보면 표면에 미세한 흠집이 생겨 기름때가 파고들고 세균과 곰팡이가 번식하여 지워지지 않는 악취를 유발합니다. 반면 포스코 정품 규격 SUS304 올스텐 배수통은 음식물 착색과 냄새 배임이 전혀 없으며, 물티슈로 쓱 닦아도 새것처럼 위생적으로 오래 사용하실 수 있습니다.',
  },
  {
    q: '철물점 스프링 작업과 플렉스 샤프트 스케일링의 차이는 무엇인가요?',
    a: '일반 수동 스프링은 단단히 굳은 기름 슬러지에 작은 구멍만 뚫고 지나가 며칠 뒤 기름이 다시 뭉쳐 재막힘이 발생하기 쉽습니다. 반면 플렉스 샤프트 스케일링은 고속 회전 체인이 배관 내벽에 달라붙은 기름 덩어리를 잘게 부수고 석션기로 모조리 빨아들여 신축 당시의 깨끗한 배관 상태로 완벽히 복원합니다.',
  },
];

