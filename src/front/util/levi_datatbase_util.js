import { leviDatabase } from "./levi_database";

export const ArchiveMatch = (input = "362550058") => {
  let oneHundredPercentMatch = [];
  let eightyFivePercentMatch = [];
  let seventyFivePercentMatch = [];
  let fiftyPercentMatch = [];
  let twentyFivePercentMatch = [];

  let inputProduct = leviDatabase.filter((item) => item.Identifier == input)[0];
  let inputProductFitTaxonomy = new Set();
  inputProduct.Fit_Taxonomy_US.split(",").forEach((fit) => {
    inputProductFitTaxonomy.add(fit.trim());
  });

  // console.log(inputProductFitTaxonomy);
  // console.log(inputProduct);
  // console.log(leviDatabase.length);
  for (let i = 0; i < leviDatabase.length; i++) {
    if (leviDatabase[i].Identifier != input) {
      if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US &&
        checkFitMatch(inputProductFitTaxonomy, leviDatabase[i]) &&
        leviDatabase[i].Stretch_Taxonomy_US ==
          inputProduct.Stretch_Taxonomy_US &&
        leviDatabase[i].Color_Group_Taxonomy_US ==
          inputProduct.Color_Group_Taxonomy_US
      ) {
        leviDatabase[i]["match"] = 100;
        oneHundredPercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US &&
        checkFitMatch(inputProductFitTaxonomy, leviDatabase[i]) &&
        leviDatabase[i].Stretch_Taxonomy_US == inputProduct.Stretch_Taxonomy_US
      ) {
        leviDatabase[i]["match"] = 85;
        eightyFivePercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US &&
        checkFitMatch(inputProductFitTaxonomy, leviDatabase[i])
      ) {
        leviDatabase[i]["match"] = 75;
        seventyFivePercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Size_Group_Taxonomy_US ==
          inputProduct.Size_Group_Taxonomy_US &&
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US
      ) {
        leviDatabase[i]["match"] = 50;
        fiftyPercentMatch.push(leviDatabase[i]);
      } else if (
        leviDatabase[i].Gender_Taxonomy_US == inputProduct.Gender_Taxonomy_US
      ) {
        leviDatabase[i]["match"] = 25;
        twentyFivePercentMatch.push(leviDatabase[i]);
      } else {
        break;
      }
    }
  }
  return [
    oneHundredPercentMatch,
    eightyFivePercentMatch,
    seventyFivePercentMatch,
    fiftyPercentMatch,
    twentyFivePercentMatch,
  ];
};
console.log(leviDatabase.length, "length");

const checkFitMatch = (inputProductFitTaxonomy, potentialMatch) => {
  // console.log("IM HERE!!!!");
  // console.log(inputProductFitTaxonomy);
  let potentialMatchFit = potentialMatch.Fit_Taxonomy_US?.split(",") || [];
  let matchFound = potentialMatchFit.some((fit) =>
    inputProductFitTaxonomy.has(fit.trim())
  );
  // console.log("matchFound", matchFound);
  return matchFound;
};

export const MatchPc9 = (pc9 = "362550058") => {
  return leviDatabase.filter((item) => item.Identifier == pc9)[0];
};

export const getRandomJeanImage = () => {
  let imagePool = [
    "https://lsco.scene7.com/is/image/lsco/A15600003-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/527970310-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/362000180-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/227910147-front-pdp-lse?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/A36250002-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/726930111-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/362000236-dynamic1-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/A19670001-dynamic1-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/527970340-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/269860016-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/373430006-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    // "https://lsco.scene7.com/is/image/lsco/A49690000-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/levis/clothing/188810012-front-pdp.jpg?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/373500152-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/362000124-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/388430016-dynamic1-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
    "https://lsco.scene7.com/is/image/lsco/228610107-front-pdp?fmt=avif&amp;qlt=40&amp;resMode=bisharp&amp;op_usm=0.6,0.6,8&amp;fit=crop,0&amp;wid=450&amp;hei=414",
  ];
  return imagePool[Math.floor(Math.random() * imagePool.length)];
};

export const assembleRecocommendationList = (pc9) => {
  let matches = ArchiveMatch(pc9);
  return [
    ...matches[0],
    ...matches[1],
    ...matches[2],
    ...matches[3],
    ...matches[4],
  ];
};

export const paginateRecommendationList = (pc9, numPerPage) => {
  let paginated = [];
  let recommendationList = assembleRecocommendationList(pc9);
  let curPage = [];
  for (let i = 0; i < recommendationList.length; i++) {
    curPage.push(recommendationList[i]);
    if (curPage.length === numPerPage) {
      paginated.push(curPage);
      curPage = [];
    }
  }
  if (curPage.length) paginated.push(curPage);
  return paginated;
};
