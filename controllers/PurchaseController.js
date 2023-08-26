const QuickChart = require('quickchart-js');
const { Purchase } = require('../models/Purchase'); 

async function getPurchaseData() {
  try {
    const purchases = await Purchase.find(); 
    return purchases;
  } catch (error) {
    console.error("Error fetching purchase data:", error);
    return [];
  }
}

// פונקציה לחישוב ממוצע הרכישות לכל חודש
function calculateMonthlyAverage(purchases) {
 // פונקציה לחישוב ממוצע הרכישות לכל חודש
function calculateMonthlyAverage(purchases) {
    // מפה ניתן לקבוע את השנה הנוכחית ולחשב את ממוצע הרכישות לכל חודש
    const currentYear = new Date().getFullYear();
    
    // מספר החודשים בשנה
    const monthsInYear = 12;
    
    // מערך שבו נשמור את ממוצעי הרכישות לכל חודש
    const monthlyAverages = new Array(monthsInYear).fill(0);
  
    // מעבר על הרכישות וחישוב הסכומים לכל חודש
    purchases.forEach(purchase => {
      const purchaseDate = new Date(purchase.date);
      if (purchaseDate.getFullYear() === currentYear) {
        const monthIndex = purchaseDate.getMonth();
        monthlyAverages[monthIndex] += purchase.amount;
      }
    });
  
    // חישוב הממוצעים לכל חודש
    for (let i = 0; i < monthsInYear; i++) {
      const totalAmount = monthlyAverages[i];
      const numberOfPurchases = purchases.filter(purchase => new Date(purchase.date).getMonth() === i).length;
      monthlyAverages[i] = numberOfPurchases > 0 ? totalAmount / numberOfPurchases : 0;
    }
  
    // מערך עם שמות החודשים
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    // יצירת מערך המכיל את הנתונים שמתאימים לגרף
    const dataForChart = monthlyAverages.map((average, index) => ({
      month: monthNames[index],
      average: average.toFixed(2) // להצגת שני ספרות אחרי הנקודה
    }));
  
    return dataForChart;
  }
  
  const monthlyAverages = [
    { month: 'January', average: 150 },
    // ... נתונים נוספים לחודשים השונים
  ];
  return monthlyAverages;
}

// פונקציה ליצירת גרף סטטיסטי
function createChart(monthlyAverages) {
  const labels = monthlyAverages.map(data => data.month);
  const averages = monthlyAverages.map(data => data.average);

  const chart = new QuickChart();
  chart
    .setConfig({
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{ label: 'Monthly Average', data: averages }]
      }
    })
    .setTitle('Monthly Average Purchase Amounts')
    .setDimensions(800, 400);
  
  return chart.getUrl();
}

// פונקציה המציגה את הגרף בדף
async function showChart(req, res) {
  try {
    const purchases = await getPurchaseData();
    const monthlyAverages = calculateMonthlyAverage(purchases);
    const chartUrl = createChart(monthlyAverages);

    res.render('about', { chartUrl }); // הצגת הדף "about" עם הגרף
  } catch (error) {
    console.error("Error:", error);
    res.render('about', { chartUrl: null }); // אם קרתה שגיאה, נציג נתונים ריקים
  }
}

module.exports = { showChart };
