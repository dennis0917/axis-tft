/* Set 17 상징(엠블럼) 제작 레시피 — 커뮤니티 전문 DB(redeemertft·emblemcomp.gg) 교차검증 + op.gg/tactics.tools KR 명칭 대조.
   신뢰도: medium (라이엇 KR 1차 표 직접 확인은 미완 — 명칭은 CommunityDragon Set17 상징명에 맞춤).
   미플=정령족(KR), 그 외 명칭은 내 데이터 상징명과 일치. */
window.TFT_EMBLEM_RECIPES = {
  system: 'fixed-recipe',
  confidence: 'medium',
  systemNote: '스파튤라는 계열 상징, 황금 프라이팬은 직업 상징을 만듭니다. 기본 조합템 1개를 더하면 정해진 특성 상징이 나오고, 스파튤라↔프라이팬은 재조합기를 쓰면 서로 전환할 수 있어 같은 조합템이라도 계열/직업 상징을 골라 만들 수 있습니다. (저격수·초능력·동물특공대 상징 등 일부는 표준 조합 외 경로로 획득)',
  spatula: {
    kr: '스파튤라(뒤집개)',
    recipes: [
      { component: 'B.F. 대검', emblem: '암흑의 별 상징' },
      { component: '곡궁', emblem: '시간 균열자 상징' },
      { component: '쓸데없이 큰 지팡이', emblem: '별돌보미 상징' },
      { component: '여신의 눈물', emblem: '우주 그루브 상징' },
      { component: '쇠사슬 조끼', emblem: '정령족 상징' },
      { component: '음전자 망토', emblem: '중재자 상징' },
      { component: '거인의 허리띠', emblem: '태고족 상징' },
      { component: '연습용 장갑', emblem: 'N.O.V.A. 상징' },
    ],
  },
  fryingPan: {
    kr: '황금 프라이팬',
    recipes: [
      { component: 'B.F. 대검', emblem: '습격자 상징' },
      { component: '곡궁', emblem: '도전자 상징' },
      { component: '쓸데없이 큰 지팡이', emblem: '여행자 상징' },
      { component: '여신의 눈물', emblem: '길잡이 상징' },
      { component: '쇠사슬 조끼', emblem: '요새 상징' },
      { component: '음전자 망토', emblem: '선봉대 상징' },
      { component: '거인의 허리띠', emblem: '싸움꾼 상징' },
      { component: '연습용 장갑', emblem: '불한당 상징' },
    ],
  },
  selfCombo: '스파튤라/프라이팬 2개 → 전략가 계열 특수템(팀 인원 +1). 특성 상징 아님.',
  sources: 'redeemertft.com, emblemcomp.gg, op.gg KR, tactics.tools KR',
};
