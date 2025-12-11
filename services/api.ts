import { AnalysisResult } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analyzeImage = async (file: File, saveImage: boolean): Promise<AnalysisResult> => {
  console.log(`Analyzing file: ${file.name}, Save Consent: ${saveImage}`);
  
  await delay(2500); // Simulate network latency

  // Mock logic: randomly determine risk for demo purposes
  // In a real app, this would POST formData to a backend
  const rand = Math.random();
  
  if (rand > 0.7) {
    return {
      probability: 0.85,
      riskLevel: 'high',
      message: 'تشير التحليلات الأولية إلى وجود مؤشرات قوية قد ترتبط بطيف التوحد. نوصي بشدة بمراجعة مختص.'
    };
  } else if (rand > 0.4) {
    return {
      probability: 0.55,
      riskLevel: 'medium',
      message: 'تظهر النتائج احتمالية متوسطة لوجود بعض السمات. يُفضل المتابعة وإجراء تقييم إضافي.'
    };
  } else {
    return {
      probability: 0.15,
      riskLevel: 'low',
      message: 'لم يتم رصد مؤشرات واضحة في التحليل الحالي. استمر في مراقبة تطور الطفل بشكل طبيعي.'
    };
  }
};