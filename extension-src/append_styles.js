const fs = require('fs');

const css = `
/* ── Extracted from ConfirmationPage.jsx ── */
#confirmation-root {
  font-family: Albert Sans, 'Albert Sans', sans-serif;
}
#confirmation-tradeHeading {
  color: #000;
  font-family: Albert Sans;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  margin: 0;
}
#confirmation-tradeHeading2 {
  color: #000;
  font-family: Albert Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  margin: 0;
}
#confirmation-heading {
  font-family: Albert Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0;
  margin: 0;
}
#confirmation-detailHeading {
  font-family: Albert Sans;
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0%;
  margin: 0;
}

/* ── Extracted from ProductDetails.jsx ── */
#productdetails-container {
  padding: 0;
}
#productdetails-loadingState {
  padding: 60px;
  display: flex;
  justify-content: center;
}

/* ── Extracted from ProductHeader.jsx ── */
#productheader-wrapper {
  display: flex;
  gap: 16px;
  text-align: start;
  align-items: center;
}
#productheader-image {
  object-fit: contain;
  border-radius: 8px;
  flex-shrink: 0;
}
#productheader-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
#productheader-title {
  color: #000;
  font-family: Albert Sans;
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  letter-spacing: 0;
}
#productheader-subtitle {
  font-family: Albert Sans;
  font-weight: 500;
  font-size: 14px;
  color: #545454;
  margin: 0;
}
#productheader-price {
  color: #000;
  font-family: Albert Sans;
  font-weight: 800;
  font-size: 24px;
  margin: 0;
  line-height: 1.2;
}

/* ── Extracted from AttributeSwatch.jsx ── */
#attributeswatch-swatchGridWrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  width: 100%;
}
#attributeswatch-swatchHeader {
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
#attributeswatch-fontLabel {
  color: #000;
  font-family: Albert Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  margin: 0;
}
#attributeswatch-fontValue {
  color: #000;
  font-family: Albert Sans;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  margin: 0;
}
#attributeswatch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
/* Note: descriptionBox has multiple lines, !important preserved if needed */
#attributeswatch-descriptionBox {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #8E8E8E;
  padding: 20px;
  background-color: #F4F4F4;
  margin-top: 12px;
  margin-bottom: 0px;
  max-height: 350px !important;
  overflow-y: auto !important;
  overflow-wrap: break-word !important;
}
#attributeswatch-conditionBadge {
  font-size: 13px;
  color: #666;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
#attributeswatch-infoIcon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
}
`;

fs.appendFileSync('components/styles/App.css', css);
console.log('Appended styles to App.css');
