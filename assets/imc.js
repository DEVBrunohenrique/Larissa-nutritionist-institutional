function  imc(){
    let heightCm = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let imcResult = document.getElementById("imc-result");
    let catResult = document.getElementById("cat-result");
    let weightResult = document.getElementById("weight-result");

    if (!isNaN(heightCm) && !isNaN(weight) && heightCm > 0){
        let height = heightCm / 100;
        let imc = weight / (height * height);
        let imcFormated = imc.toFixed(2).replace(".", ",");
        let ideaWeight;

        if (gender === 'male') {
            ideaWeight = (height * 100 - 100) - ((height * 100 - 150) / 4);
        } else {
            ideaWeight = (height * 100 - 100) - ((height * 100 - 150) / 2.5);
        }
        
        if(age === 'adult'){
            switch(true){
                case imc < 16:
                    catResult.innerHTML = `Nivel =  Magreza Extrema`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(255, 0, 0)'
                    break
                case imc < 17:
                    catResult.innerHTML = `Nivel = Magreza Moderada`
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(rgb(214, 143, 36))'
                    break
                case imc < 18.5:
                    catResult.innerHTML = ` Nivel = Magreza Leve`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(214, 197, 36)'
                    break
                case imc < 24.99:
                    catResult.innerHTML =  `Nivel = Saudável`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'green'
                    break
                case imc < 29.9:
                    catResult.innerHTML = `Nivel = Sobrepeso`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(219, 127, 51)'
                    break
                case imc < 34.9:
                    catResult.innerHTML = `Nivel = Nivel = Obesidade Grau I`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(202, 91, 0)'
                    break
                case imc < 39.9:
                    catResult.innerHTML = `Nivel = Obesidade Grau II (severa)`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(185, 44, 44)'
                    break
                case imc > 40:
                    catResult.innerHTML = `Nivel = Obesidade Grau III (Mórbida)`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(255, 0, 0)'
                    break
        }

        }else{
            switch(true){
                case imc < 22:
                    catResult.innerHTML = ` Nivel = Magreza leve`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(214, 197, 36)'
                    break
                case imc < 27:
                    catResult.innerHTML = ` Nivel = Saudável`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'green'
                    break
                case imc < 29.99:
                    catResult.innerHTML = `Nivel = Sobrepeso`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(219, 127, 51)'
                    break
                case imc > 30:
                    catResult.innerHTML = `Nivel = Obesidade Grau I`;
                    imcResult.innerHTML = `IMC = ${imcFormated}`;
                    weightResult.innerHTML = `Peso ideal: ${ideaWeight.toFixed(2).replace('.',',').replace('-','')} Kg`;
                    catResult.style.color = 'rgb(255, 0, 0)'
                    break
            }
        }


    } else{
        return alert('Verifique os dados inseridos!');
    }
    
}
