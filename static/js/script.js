const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");

const currentYear = new Date().getFullYear();
        const selectYear = document.getElementById("year");

        for (let year = 2023; year <= 2028; year++) {
            const option = document.createElement("option");
            option.text = year;
            option.value = year;
            selectYear.appendChild(option);
        }


const stateDistricts = {'Andaman and Nicobar Islands': ['Andaman And Nicobar Islands', 'Nicobars', 'North And Middle Andaman', 'South Andamans'], 'Andhra Pradesh': ['Adilabad', 'Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Hyderabad', 'Kadapa', 'Karimnagar', 'Khammam', 'Krishna', 'Kurnool', 'Mahbubnagar', 'Medak', 'Nalgonda', 'Nizamabad', 'Prakasam', 'Rangareddi', 'Spsr Nellore', 'Srikakulam', 'Visakhapatanam', 'Vizianagaram', 'Warangal', 'West Godavari'], 'Arunachal Pradesh': ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Leparada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'], 'Assam': ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metro', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Marigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara Mancachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'], 'Bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Bokaro', 'Buxar', 'Chatra', 'Darbhanga', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbum', 'Garhwa', 'Gaya', 'Giridih', 'Godda', 'Gopalganj', 'Gumla', 'Hazaribagh', 'Jamui', 'Jehanabad', 'Kaimur (Bhabua)', 'Katihar', 'Khagaria', 'Kishanganj', 'Koderma', 'Lakhisarai', 'Lohardaga', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Pakur', 'Palamu', 'Pashchim Champaran', 'Patna', 'Purbi Champaran', 'Purnia', 'Ranchi', 'Rohtas', 'Saharsa', 'Sahebganj', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Singhbhum'], 'Chandigarh': ['Chandigarh'], 'Chhattisgarh': ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariyaband', 'Gaurella-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'], 'Dadra and Nagar Haveli': ['Dadra And Nagar Haveli'], 'Daman and Diu': ['Daman', 'Diu', 'Daman And Diu'], 'Delhi': ['Delhi_Total', 'Delhi'], 'Goa': ['Goa', 'North Goa', 'South Goa'], 'Gujarat': ['Ahmadabad', 'Amreli', 'Anand', 'Aravalli', 'Banas Kantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhotaudepur', 'Dang', 'Devbhumi Dwarka', 'Dohad', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda', 'Mahesana', 'Mahisagar', 'Morbi', 'Narmada', 'Navsari', 'Panch Mahals', 'Patan', 'Porbandar', 'Rajkot', 'Sabar Kantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'], 'Haryana': ['Ambala', 'Bhiwani', 'Charki Dadri', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Mewat', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'], 'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahul And Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'], 'Jammu and Kashmir': ['Anantnag', 'Badgam', 'Bandipora', 'Baramulla', 'Doda', 'Ganderbal', 'Jammu', 'Kargil', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Leh Ladakh', 'Poonch', 'Pulwama', 'Rajauri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'], 'Jharkhand': ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj', 'Saraikela Kharsawan', 'Simdega', 'West Singhbhum'], 'Karnataka': ['Bagalkot', 'Bagalkote', 'Ballari', 'Bangalore Rural', 'Belagavi', 'Belgaum', 'Bellary', 'Bengaluru Urban', 'Bidar', 'Bijapur', 'Chamarajanagar', 'Chamarajanagara', 'Chikballapur', 'Chikkaballapura', 'Chikkamagaluru', 'Chikmagalur', 'Chitradurga', 'Dakshin Kannad', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Gadag', 'Gulbarga', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Mysuru', 'Raichur', 'Ramanagara', 'Shimoga', 'Shivamogga', 'Tumakuru', 'Tumkur', 'Udupi', 'Uttar Kannad', 'Uttara Kannada', 'Vijayapura', 'Yadagiri', 'Yadgir'], 'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'], 'Laddakh': ['Kargil'], 'Madhya Pradesh': ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Bastar', 'Betul', 'Bhind', 'Bhopal', 'Bilaspur', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Dantewada', 'Datia', 'Dewas', 'Dhamtari', 'Dhar', 'Dindori', 'Durg', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Janjgir-Champa', 'Jashpur', 'Jhabua', 'Kabirdham', 'Kanker', 'Katni', 'Khandwa', 'Khargone', 'Korba', 'Korea', 'Mahasamund', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Niwari', 'Panna', 'Raipur', 'Raisen', 'Rajgarh', 'Rajnandgaon', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Surguja', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'], 'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'], 'Manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Senapati', 'Tamenglong', 'Thoubal', 'Ukhrul'], 'Meghalaya': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'], 'Mizoram': ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'], 'Nagaland': ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'], 'Odisha': ['Anugul', 'Balangir', 'Baleshwar', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghapur', 'Jajapur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Sonepur', 'Sundargarh'], 'Puducherry': ['Karaikal', 'Mahe', 'Pondicherry', 'Yanam'], 'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Firozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Nawanshahr', 'Pathankot', 'Patiala', 'Rupnagar', 'S', 'Sangrur', 'Shahid Bhagat Singh Nagar', 'Tarn Taran'], 'Rajasthan': ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Ganganagar', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Tonk', 'Udaipur'], 'Sikkim': ['East District', 'North District', 'South District', 'West District'], 'Tamil Nadu': ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanniyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'The Nilgiris', 'Theni', 'Thiruvallur', 'Thiruvarur', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvannamalai', 'Tuticorin', 'Vellore', 'Villupuram', 'Virudhunagar'], 'Telangana': ['Adilabad', 'Bhadradri', 'Dadra And Nagar Haveli', 'Daman', 'Diu', 'Hanumakonda', 'Jagitial', 'Jangoan', 'Jayashankar', 'Jogulamba', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahbubnagar', 'Mancherial', 'Medak', 'Medchal', 'Medchal Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanapet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna', 'Rangareddi', 'Sangareddy', 'Siddipet', 'Suryapet', 'The Dadra And Nagar Haveli And Daman And Diu', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Warangal Urban', 'Yadadri'], 'Tripura': ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'], 'Uttar Pradesh': ['Agra', 'Aligarh', 'Allahabad', 'Almora', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Azamgarh', 'Bageshwar', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chamoli', 'Champawat', 'Chandauli', 'Chitrakoot', 'Dehradun', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Haridwar', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kheri', 'Kushi Nagar', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Nainital', 'Pauri Garhwal', 'Pilibhit', 'Pithoragarh', 'Pratapgarh', 'Rae Bareli', 'Rampur', 'Rudra Prayag', 'Saharanpur', 'Sambhal', 'Sant Kabeer Nagar', 'Sant Ravidas Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharth Nagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Tehri Garhwal', 'Udam Singh Nagar', 'Unnao', 'Uttar Kashi', 'Varanasi'], 'Uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudra Prayag', 'Tehri Garhwal', 'Udam Singh Nagar', 'Uttar Kashi'], 'West Bengal': ['24 Paraganas North', '24 Paraganas South', 'Alipurduar', 'Bankura', 'Birbhum', 'Coochbehar', 'Darjeeling', 'Dinajpur Dakshin', 'Dinajpur Uttar', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Maldah', 'Medinipur East', 'Medinipur West', 'Murshidabad', 'Nadia', 'Paschim Bardhaman', 'Purba Bardhaman', 'Purulia']};

        const stateDropdown = document.getElementById("state");
        const districtDropdown = document.getElementById("district");

        // Populate state dropdown
        for (const state in stateDistricts) {
            const option = document.createElement("option");
            option.text = state;
            stateDropdown.appendChild(option);
        }

        stateDropdown.addEventListener("change", function() {
            const selectedState = stateDropdown.value;
            districtDropdown.innerHTML = ""; // Clear existing options
            
            const districts = stateDistricts[selectedState];
            for (const district of districts) {
                const option = document.createElement("option");
                option.text = district;
                districtDropdown.appendChild(option);
            }
        });


 const cropData = {'Arecanut': 0, 'Arhar/Tur': 1, 'Bajra': 2, 'Banana': 3, 'Barley': 4, 'Black Pepper': 5, 'Cardamom': 6, 'Cashewnut': 7, 'Castor Seed': 8, 'Coconut': 9, 'Coriander': 10, 'Cotton(Lint)': 11, 'Cowpea(Lobia)': 12, 'Dry Ginger': 13, 'Dry Chillies': 14, 'Garlic': 15, 'Ginger': 16, 'Gram': 17, 'Groundnut': 18, 'Guar Seed': 19, 'Horse-Gram': 20, 'Jowar': 21, 'Jute': 22, 'Khesari': 23, 'Linseed': 24, 'Maize': 25, 'Masoor': 26, 'Mesta': 27, 'Moong(Green Gram)': 28, 'Moth': 29, 'Niger Seed': 30, 'Oilseeds Total': 31, 'Onion': 32, 'Other Cereals': 33, 'Other Kharif Pulses': 34, 'Other Rabi Pulses': 35, 'Other Summer Pulses': 36, 'Peas & Beans (Pulses)': 37, 'Potato': 38, 'Ragi': 39, 'Rapeseed &Mustard': 40, 'Rice': 41, 'Safflower': 42, 'Sannhamp': 43, 'Sesamum': 44, 'Small Millets': 45, 'Soyabean': 46, 'Sugarcane': 47, 'Sunflower': 48, 'Sweet Potato': 49, 'Tapioca': 50, 'Tobacco': 51, 'Turmeric': 52, 'Urad': 53, 'Wheat': 54, 'Other Oilseeds': 55};

    const seasonData = {'Autumn': 0, 'Kharif': 1, 'Rabi': 2, 'Summer': 3, 'Whole Year': 4, 'Winter': 5};

    const cropDropdown = document.getElementById("crop");
    const seasonDropdown = document.getElementById("season");

    // Populate Crop dropdown
    for (const crop in cropData) {
        const option = document.createElement("option");
        option.text = crop;
        cropDropdown.appendChild(option);
    }

    // Populate Season dropdown
    for (const season in seasonData) {
        const option = document.createElement("option");
        option.text = season;
        seasonDropdown.appendChild(option);
    }

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    // Retrieving the values of form elements 
   // var name = document.contactForm.fullname.value;
    var nameonmrk = document.contactForm.nameonmrk.value;
    var gender = document.contactForm.gender.value;
}



function hideFormAndShowPrediction() {
    // Hide the form elements
    document.querySelector('form').style.display = 'none';

    // Show the prediction box
    document.getElementById('predictionBox').style.display = 'block';
}


document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("formContainer");
    const predictionContainer = document.getElementById("predictionContainer");
    const loadingGif = document.getElementById("loadingGif");
    const predictionBox = document.querySelector(".prediction-box");
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function() {
        formContainer.style.display = "block";
        predictionContainer.style.display = "none";
        predictionBox.style.display = "none";
        loadingGif.style.display = "block"; // Hide back button
    });
});
    
document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("formContainer");
    const predictionContainer = document.getElementById("predictionContainer");

    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {

            var state = document.getElementById("state").value;
            var district = document.getElementById("district").value;
            var crop = document.getElementById("crop").value;
            var season = document.getElementById("season").value;
            var year = document.getElementById("year").value;
            var area = document.getElementById("area").value;

            var StateErr = DistrictErr = CropErr = SeasonErr = YearErr = AreaErr = false;

            // Validate state
            if (state === "0") {
                printError("StateErr", "Please select a state");
                StateErr = true;
            } else {
                printError("StateErr", "");
            }

            // Validate district
            if (district === "0") {
                printError("DistrictErr", "Please select a district");
                DistrictErr = true;
            } else {
                printError("DistrictErr", "");
            }

            // Validate crop
            if (crop === "0") {
                printError("cropErr", "Please select a crop");
                CropErr = true;
            } else {
                printError("cropErr", "");
            }

            // Validate season
            if (season === "0") {
                printError("seasonErr", "Please select a season");
                SeasonErr = true;
            } else {
                printError("seasonErr", "");
            }

            // Validate year
            if (year === "0") {
                printError("yearErr", "Please select a year");
                YearErr = true;
            } else {
                printError("yearErr", "");
            }

            // Validate area
            if (area === "") {
                printError("areaErr", "Please enter the area");
                AreaErr = true;
            } else {
                printError("areaErr", "");
            }

            // Prevent form submission if any validation fails
            if (!StateErr && !DistrictErr && !CropErr && !SeasonErr && !YearErr && !AreaErr) {
            formContainer.style.display = "none";
            predictionContainer.style.display = "block";
        } else {
            event.preventDefault();
        }
    });
});


 




    





