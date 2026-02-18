/*
 Faça um programa que exiba as opções: 
 1 – Conversão de Graus Celsius em Graus Fahrenheit 
 2 – Conversão de Graus Fahrenheit em Graus Celsius 
 3 – Peso ideal do homem 
 4 – Peso ideal da mulher 
 O programa só deve encerrar quando o usuário digitar 'S'
 para a pergunta “Deseja encerrar o programa?”
 Obs.: Nas opções 3 e 4 informar se o usuário está acima ou abaixo do peso ideal.
*/

function toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function idealWeightMale(height: number, weight: number): void {
    const ideal = (72.7 * height) - 58;

    console.log(`Ideal weight: ${ideal.toFixed(2)} kg`);

    if (weight > ideal) {
        console.log("You are ABOVE the ideal weight");
    } else if (weight < ideal) {
        console.log("You are BELOW the ideal weight");
    } else {
        console.log("You are AT the ideal weight");
    }
}

function idealWeightFemale(height: number, weight: number): void {
    const ideal = (62.1 * height) - 44.7;

    console.log(`Ideal weight: ${ideal.toFixed(2)} kg`);

    if (weight > ideal) {
        console.log("You are ABOVE the ideal weight");
    } else if (weight < ideal) {
        console.log("You are BELOW the ideal weight");
    } else {
        console.log("You are AT the ideal weight");
    }
}

while (true) {
    console.log(`
        1 - Celsius to Fahrenheit
        2 - Fahrenheit to Celsius
        3 - Ideal weight (Male)
        4 - Ideal weight (Female)
    `);

    const option = Number(prompt("Choose an option:"));

    switch (option) {
        case 1: {
            const c = Number(prompt("Enter Celsius:"));
            console.log(`Result: ${toFahrenheit(c).toFixed(2)} °F`);
            break;
        }
        case 2: {
            const f = Number(prompt("Enter Fahrenheit:"));
            console.log(`Result: ${toCelsius(f).toFixed(2)} °C`);
            break;
        }
        case 3: {
            const h = Number(prompt("Enter height (m):"));
            const w = Number(prompt("Enter weight (kg):"));
            idealWeightMale(h, w);
            break;
        }
        case 4: {
            const h = Number(prompt("Enter height (m):"));
            const w = Number(prompt("Enter weight (kg):"));
            idealWeightFemale(h, w);
            break;
        }
        default:
            console.log("Invalid option");
    }

    const toContinue = prompt("Do you want to end the program? (S to exit)")?.toUpperCase();

    if (toContinue === "S") {
        break;
    }
}
