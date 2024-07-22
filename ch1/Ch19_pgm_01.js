class Statistics {
    constructor(data) {
      this.data = data.sort((a, b) => a - b);
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const mid = Math.floor(this.count() / 2);
      return this.count() % 2 === 0 ? (this.data[mid - 1] + this.data[mid]) / 2 : this.data[mid];
    }
  
    mode() {
      const frequency = {};
      let maxFreq = 0;
      let mode;
      for (const num of this.data) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
          maxFreq = frequency[num];
          mode = num;
        }
      }
      return { mode, count: maxFreq };
    }
  
    variance() {
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + (val - mean) ** 2, 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
      const frequency = {};
      for (const num of this.data) {
        frequency[num] = (frequency[num] || 0) + 1;
      }
      return Object.entries(frequency).map(([key, value]) => [parseFloat(key), value]);
    }
  }
  
  // Example usage
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum:', statistics.sum()); // 744
  console.log('Min:', statistics.min()); // 24
  console.log('Max:', statistics.max()); // 38
  console.log('Range:', statistics.range()); // 14
  console.log('Mean:', statistics.mean()); // 30
  console.log('Median:', statistics.median()); // 29
  console.log('Mode:', statistics.mode()); // { mode: 26, count: 5 }
  console.log('Variance:', statistics.variance()); // 17.5
  console.log('Standard Deviation:', statistics.std()); // 4.2
  console.log('Frequency Distribution:', statistics.freqDist()); // [[24, 2], [25, 1], [26, 5], [27, 4], [29, 1], [31, 2], [32, 3], [33, 2], [34, 2], [37, 2], [38, 1]]
  