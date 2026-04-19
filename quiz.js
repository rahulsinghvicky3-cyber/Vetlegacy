 let quizData = {
hard: [

/* ---------- PHYSIOLOGY ---------- */

{
question: "Which hormone primarily regulates milk ejection reflex?",
options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
correct: 1
},
{
question: "Which VFA is glucogenic in ruminants?",
options: ["Acetate", "Butyrate", "Propionate", "Valerate"],
correct: 2
},
{
question: "Normal rumen pH range?",
options: ["4–5", "5.5–7", "7–8.5", "8–9"],
correct: 1
},
{
question: "Which ion is major intracellular cation?",
options: ["Na+", "K+", "Ca++", "Cl-"],
correct: 1
},
{
question: "Oxygen carrying capacity depends on?",
options: ["Plasma", "Hemoglobin", "Platelets", "WBC"],
correct: 1
},
{
question: "Vitamin synthesized in rumen?",
options: ["Vitamin A", "Vitamin D", "Vitamin B complex", "Vitamin C"],
correct: 2
},
{
question: "Site of urea cycle?",
options: ["Kidney", "Liver", "Rumen", "Intestine"],
correct: 1
},
{
question: "Which hormone decreases blood calcium?",
options: ["PTH", "Calcitonin", "Vitamin D", "Cortisol"],
correct: 1
},
{
question: "Estrus cycle length in cow?",
options: ["18 days", "21 days", "24 days", "28 days"],
correct: 1
},
{
question: "Main energy source for brain?",
options: ["Fat", "Protein", "Glucose", "Ketone"],
correct: 2
},

/* ---------- LPM ---------- */

{
question: "Most efficient method of milking buffalo?",
options: ["Wet hand", "Dry hand", "Stripping", "Knuckling"],
correct: 1
},
{
question: "Ideal temperature for poultry?",
options: ["10°C", "15°C", "20°C", "25°C"],
correct: 2
},
{
question: "Colostrum is rich in?",
options: ["Fat", "Protein", "Immunoglobulins", "Lactose"],
correct: 2
},
{
question: "Dry period in dairy cow?",
options: ["30 days", "45 days", "60 days", "90 days"],
correct: 2
},
{
question: "Milking frequency affects?",
options: ["Fat %", "Milk yield", "Protein", "Minerals"],
correct: 1
},
{
question: "Best bedding material?",
options: ["Sand", "Straw", "Concrete", "Plastic"],
correct: 1
},
{
question: "Ideal space per cow?",
options: ["2 sq.m", "3.5 sq.m", "5 sq.m", "7 sq.m"],
correct: 2
},
{
question: "Heat detection best time?",
options: ["Morning", "Afternoon", "Evening", "Night"],
correct: 0
},
{
question: "Weaning age in calf?",
options: ["1 month", "2 months", "3 months", "6 months"],
correct: 2
},
{
question: "Most common mastitis pathogen?",
options: ["E. coli", "Staph aureus", "Salmonella", "Clostridium"],
correct: 1
},

/* ---------- MIXED HIGH LEVEL ---------- */

{
question: "Which enzyme coagulates milk?",
options: ["Pepsin", "Trypsin", "Renin", "Lipase"],
correct: 2
},
{
question: "Which gas is highest in rumen?",
options: ["CO2", "CH4", "O2", "H2"],
correct: 0
},
{
question: "Which vitamin prevents night blindness?",
options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
correct: 0
},
{
question: "Which mineral is required for hemoglobin?",
options: ["Calcium", "Iron", "Magnesium", "Phosphorus"],
correct: 1
},
{
question: "Which hormone controls parturition?",
options: ["Progesterone", "Estrogen", "Oxytocin", "Relaxin"],
correct: 2
},

/* ---------- ADVANCED ---------- */

{
question: "Which microorganism produces methane?",
options: ["Bacteria", "Protozoa", "Fungi", "Archaea"],
correct: 3
},
{
question: "Which buffer stabilizes rumen pH?",
options: ["Bicarbonate", "Phosphate", "Protein", "Urea"],
correct: 0
},
{
question: "Which disease is zoonotic?",
options: ["FMD", "Brucellosis", "HS", "BQ"],
correct: 1
},
{
question: "Which hormone is stress hormone?",
options: ["Insulin", "Cortisol", "Glucagon", "Thyroxine"],
correct: 1
},
{
question: "Which feed is protein rich?",
options: ["Maize", "Soybean meal", "Rice straw", "Wheat bran"],
correct: 1
},

/* ---------- ADDING MORE RANDOMIZED HIGH LEVEL ---------- */

{
question: "Placenta type in cow?",
options: ["Diffuse", "Cotyledonary", "Zonary", "Discoidal"],
correct: 1
},
{
question: "Gestation period of cow?",
options: ["240", "260", "280", "300"],
correct: 2
},
{
question: "Which enzyme digests protein?",
options: ["Amylase", "Lipase", "Pepsin", "Cellulase"],
correct: 2
},
{
question: "Which vitamin for blood clotting?",
options: ["A", "D", "E", "K"],
correct: 3
},
{
question: "Which gas causes bloat?",
options: ["O2", "CO2", "CH4", "H2"],
correct: 2
}
 
/* ---------- ASSERTION-REASON ---------- */

{
question: "Assertion: Oxytocin causes milk let-down. Reason: It acts on alveolar cells.",
options: [
"A and R true, R correct explanation",
"A and R true, R incorrect explanation",
"A true, R false",
"A false, R true"
],
correct: 1
},
{
question: "Assertion: Rumen microbes synthesize protein. Reason: They use non-protein nitrogen.",
options: [
"A and R true, R correct",
"A and R true, R incorrect",
"A true, R false",
"A false, R true"
],
correct: 0
},

/* ---------- MATCH TYPE ---------- */

{
question: "Match hormone with function: Oxytocin, Prolactin, Estrogen, Progesterone",
options: [
"Milk letdown, Milk synthesis, Heat, Pregnancy",
"Milk synthesis, Heat, Pregnancy, Milk letdown",
"Heat, Milk synthesis, Pregnancy, Milk letdown",
"Pregnancy, Heat, Milk synthesis, Milk letdown"
],
correct: 0
},

/* ---------- CLINICAL ---------- */

{
question: "Milk fever is due to deficiency of?",
options: ["Magnesium", "Calcium", "Phosphorus", "Iron"],
correct: 1
},
{
question: "Ketosis occurs due to deficiency of?",
options: ["Protein", "Energy", "Minerals", "Water"],
correct: 1
},
{
question: "Grass tetany is due to deficiency of?",
options: ["Calcium", "Magnesium", "Phosphorus", "Sodium"],
correct: 1
},

/* ---------- PHYSIOLOGY ADVANCED ---------- */

{
question: "Which hormone increases blood glucose?",
options: ["Insulin", "Glucagon", "Oxytocin", "Prolactin"],
correct: 1
},
{
question: "Which gland secretes ADH?",
options: ["Anterior pituitary", "Posterior pituitary", "Thyroid", "Adrenal"],
correct: 1
},
{
question: "Which electrolyte maintains osmotic pressure?",
options: ["Na+", "K+", "Ca++", "Mg++"],
correct: 0
},
{
question: "Which organ produces bile?",
options: ["Pancreas", "Liver", "Kidney", "Stomach"],
correct: 1
},
{
question: "Which enzyme digests fat?",
options: ["Amylase", "Pepsin", "Lipase", "Trypsin"],
correct: 2
},

/* ---------- LPM ADVANCED ---------- */

{
question: "Best method for heat detection?",
options: ["Visual observation", "Milk yield drop", "Mounting behavior", "All"],
correct: 3
},
{
question: "Which system improves milk yield?",
options: ["Loose housing", "Tie stall", "Extensive", "Semi-intensive"],
correct: 0
},
{
question: "Ideal humidity for dairy cattle?",
options: ["30–40%", "50–60%", "70–80%", "90%"],
correct: 1
},
{
question: "Best age for first calving?",
options: ["18 months", "24 months", "30 months", "36 months"],
correct: 1
},

/* ---------- MICRO + PATHO ---------- */

{
question: "Brucellosis is transmitted by?",
options: ["Milk", "Contact", "Abortion material", "All"],
correct: 3
},
{
question: "FMD is caused by?",
options: ["Bacteria", "Virus", "Fungus", "Protozoa"],
correct: 1
},
{
question: "Black quarter is caused by?",
options: ["Clostridium", "Salmonella", "E. coli", "Virus"],
correct: 0
},

/* ---------- NUTRITION ---------- */

{
question: "Energy unit in feed?",
options: ["Kg", "MJ", "g", "L"],
correct: 1
},
{
question: "Protein is measured as?",
options: ["NFE", "CP", "TDN", "ADF"],
correct: 1
},
{
question: "Roughage contains?",
options: ["Low fiber", "High fiber", "High protein", "High fat"],
correct: 1
},

/* ---------- REPRODUCTION ---------- */

{
question: "Ovulation occurs when?",
options: ["Before estrus", "During estrus", "After estrus", "Random"],
correct: 2
},
{
question: "Fertilization site?",
options: ["Uterus", "Ovary", "Oviduct", "Cervix"],
correct: 2
},

/* ---------- HIGH TRICK ---------- */

{
question: "Which is NOT VFA?",
options: ["Acetate", "Propionate", "Butyrate", "Glucose"],
correct: 3
},
{
question: "Which is NOT hormone?",
options: ["Insulin", "Thyroxine", "Pepsin", "Cortisol"],
correct: 2
},

/* ---------- CASE BASED ---------- */

{
question: "Cow not eating, low milk, sweet smell → diagnosis?",
options: ["Milk fever", "Ketosis", "Mastitis", "Bloat"],
correct: 1
},
{
question: "Cow downer after calving → diagnosis?",
options: ["Ketosis", "Milk fever", "Mastitis", "FMD"],
correct: 1
},

/* ---------- EXTENSION ---------- */

{
question: "Extension aims to?",
options: ["Profit", "Education", "Production", "Export"],
correct: 1
},

/* ---------- RANDOM HARD ---------- */

{
question: "Which vitamin synthesized by sunlight?",
options: ["A", "B", "C", "D"],
correct: 3
},
{
question: "Which organ filters blood?",
options: ["Liver", "Kidney", "Heart", "Lung"],
correct: 1
},
{
question: "Which gas used in respiration?",
options: ["CO2", "O2", "CH4", "N2"],
correct: 1
},
{
question: "Which disease affects udder?",
options: ["FMD", "Mastitis", "BQ", "HS"],
correct: 1
},
{
question: "Which mineral for bone?",
options: ["Iron", "Calcium", "Sodium", "Potassium"],
correct: 1
},
{
question: "Which feed is roughage?",
options: ["Maize", "Straw", "Oil cake", "Grain"],
correct: 1
},
{
question: "Which hormone controls growth?",
options: ["GH", "Insulin", "Thyroxine", "All"],
correct: 3
},

/* ---------- FINAL ---------- */

{
question: "Most important dairy breed in India?",
options: ["Gir", "Sahiwal", "HF", "Jersey"],
correct: 2
},
{
question: "Most productive buffalo?",
options: ["Murrah", "Jaffarabadi", "Surti", "Mehsana"],
correct: 0
}

];
