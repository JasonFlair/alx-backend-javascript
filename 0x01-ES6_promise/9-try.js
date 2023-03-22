export default function guardrail(mathFunction) {
    const mathPromise = mathFunction();
    const guardrailArray = [];
    return mathPromise.then((result) => {
        guardrailArray.push(result);
        guardrailArray.push('Guardrail was processed');
        console.log(guardrailArray);
        return guardrailArray;
    })
}