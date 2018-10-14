const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


// Connection URL
const url = "enter db info here"
var lastResult;

function addOrganizationData(collectionName){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("CountriesDB");
        var myobj = { "_id": "5bc2b4ee1c9d44000036c808", "Organization": { "0": { "organizationsDescription": "The Hungarian American Coalition is a nationwide non-profit 501(c)(3) organization that promotes public understanding and awareness of Hungarian American issues.", "upcomingEvents": "Festival of Nations Aug 24 - 25 2019 ", "websites": "http://www.hacusa.org/", "name": "Hungarian American Coalition" }, "1": { "upcomingEvents": "Festival of Nations Aug 24 - 25 2019 ", "organizationsDescription": "The Hungarian American Coalition is a nationwide non-profit 501(c)(3) organization that promotes public understanding and awareness of Hungarian American issues.", "websites": "http://www.hacusa.org/", "name": "Hungarian American Coalition" }, "2": { "upcomingEvents": "Festival of Nations Aug 24 - 25 2019 ", "organizationsDescription": "The Hungarian American Coalition is a nationwide non-profit 501(c)(3) organization that promotes public understanding and awareness of Hungarian American issues.", "name": "Hungarian American Coalition", "websites": "http://www.hacusa.org/" } }, "Jobs": { "0": { "Title": "Web Developer", "Description": "Vast knowledge areas of web development with experience in the fields", "Link": "https://jobs.slu.edu" }, "1": { "Title": "Doctor", "Description": "Looking for a doctor to service our location", "Link": "https://www.thejoint.com" } }, "Companies": { "0": { "ImageLinks": "data:image/png;base64,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", "Apply": "http://www.specialcounsel.com" }, "1": { "ImageLinks": "http://www.risestl.org/media/2016/01/umsl-logo.jpg", "Apply": "https://www.umsl.edu/depts/career/tritoncareers.html" } }, "Demographic": ["<iframe width=\"100%\" height=\"325\" frameborder=\"0\" scrolling=\"no\" marginwidth=\"0\" marginheight=\"0\" src=\"https://www.google.com/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=m&amp;strail=false&amp;bcs=d&amp;nselm=s&amp;met_s=unemployment&amp;scale_s=lin&amp;ind_s=false&amp;dimp_c=country:region&amp;idim=country:USA:HUN&amp;ifdim=country&amp;hl=en_US&amp;dl=en_US&amp;ind=false&amp;xMax=66.8401145310387&amp;xMin=-148.5798073439613&amp;yMax=-28.19567618274876&amp;yMin=74.43530922875438&amp;mapType=t&amp;icfg&amp;iconSize=0.5\"></iframe>"] };
        dbo.collection(collectionName).insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

function gatherCountryData(countryName){
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("CountriesDB");
        dbo.collection(countryName).find({}).toArray(function (err, result) {
            if (err) throw err;
            lastResult = result[0];
            console.log(lastResult);
            db.close();
        });
    });
}

function gatherCompanyData(countryName) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("CountriesDB");
        dbo.collection(countryName).find({}).toArray(function (err, result) {
            if (err) throw err;
            lastResult = result[0].Companies;
            var i=0;
            var builtHTML = "";
            while (lastResult[i] !=null) {
                builtHTML = builtHTML + "<br><br><a target='_blank' style='color:white;background-color:#BF0A30;padding:5px;border-radius: 2px 5px;'  href='" + lastResult[i].Apply + "'><img src ='" + lastResult[i].ImageLinks+"'></a>"; 
                i++;
            }
            document.getElementById("mainContent").innerHTML = builtHTML;
            db.close();
        });
    });
}
function gatherJobData(countryName) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("CountriesDB");
        dbo.collection(countryName).find({}).toArray(function (err, result) {
            if (err) throw err;
            lastResult = result[0].Jobs;
            var i=0;
            var builtHTML = "";
            while (lastResult[i] !=null) {
                builtHTML = builtHTML + "<a target='_blank' style='color:white;background-color:#BF0A30;padding:5px;border-radius: 2px 5px;'  href='" + lastResult[i].Link + "'>" + lastResult[i].Link + "</a>" + "<h1>" + lastResult[i].Title + "</h1>" + lastResult[i].Description + "<br><br><br>"; 
                i++;
            }
            document.getElementById("mainContent").innerHTML = builtHTML;
            db.close();
        });
    });
}
function gatherOrganizationData(countryName) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("CountriesDB");
        dbo.collection(countryName).find({}).toArray(function (err, result) {
            if (err) throw err;
            lastResult = result[0].Organization;
            var i=0;
            var builtHTML = "";
            while (lastResult[i] !=null) {
                builtHTML = builtHTML +"<a target='_blank' style='color:white;background-color:#BF0A30;padding:5px;border-radius: 2px 5px;'  href='" + lastResult[i].websites + "'>" + lastResult[i].websites + "</a>" + "<h1>" + lastResult[i].name + "</h1>" + lastResult[i].organizationsDescription + "<h2></br>Upcoming Events</h2><h3>" + lastResult[i].upcomingEvents + "</h3><br><br>"; 
                i++;
            }
            document.getElementById("mainContent").innerHTML = builtHTML;
            db.close();
        });
    });
    
}

function gatherDemographicData(countryName) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("CountriesDB");
        dbo.collection(countryName).find({}).toArray(function (err, result) {
            if (err) throw err;
            lastResult = result[0].Demographic;
            var i = 0;
            var builtHTML = "";
            while (lastResult[i] != null) {
                builtHTML = builtHTML + "<br>" + lastResult[i]+"<br>"
                i++;
            }
            document.getElementById("mainContent").innerHTML = builtHTML;
            db.close();
        });
    });
}
