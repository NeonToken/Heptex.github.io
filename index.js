let JsonStructure = {
    "KeyUsername":"",
    "KeyEmail":"",
    "KeySkill":"",
    "KeyLanguage":"",
}
let InputFunction = () => {
    let UsernameVariable = document.getElementById("Username").value
    let EmailVariable = document.getElementById("Email").value
    let SkillVariable = document.getElementById("Skill").value
    let LanguageVariable = document.getElementById("Language").value
    let EmailFound = NaN
    EmailVariable === "" ? EmailFound = true : EmailFound = false
    switch(EmailFound){
        case true:
            delete JsonStructure["KeyEmail"]
            JsonStructure["KeyUsername"] = UsernameVariable
            JsonStructure["KeySkill"] = SkillVariable
            JsonStructure["KeyLanguage"] = LanguageVariable
        break;
        case false:
            JsonStructure["KeyUsername"] = UsernameVariable
            JsonStructure["KeyEmail"] = EmailVariable
            JsonStructure["KeySkill"] = SkillVariable
            JsonStructure["KeyLanguage"] = LanguageVariable
        break;
    }
    console.log(JSON.stringify(JsonStructure))
}