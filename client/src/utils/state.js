const wordsPageState = {
  page: 1,
  levels: ['A1 elementary', 'A2 pre-intermediate', 'B1 intermediate', 'B2 upper-intermediate', 'C1 advanced', 'C2 proficiency'],
  group: 0,
  showTranslate: true,
  color: {
    0: '#a867fd',
    1: '#00e1ff',
    2: '#73fd67',
    3: '#f1ff72',
    4: '#ffce72',
    5: '#ff85a3',
  },
  wordBtn: {
    'difficult' : '<i class="fa-solid fa-exclamation" data-panel="difficult"></i>',
    'learned' : '<i class="fa-solid fa-graduation-cap" data-panel="learned"></i>',
    'statistic' : '<i class="fa-solid fa-chart-line" data-panel="statistic"></i>',
  },
}


export default wordsPageState;