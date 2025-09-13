const Cnpj = document.getElementById('cnpj')
const Cep = document.getElementById('cep')

async function BuscarCep () {
    const cepValue = Cep.value;
    const cepFormatedValue = cepValue.replace('-','').trim();
    if (cepFormatedValue.lenght !== 8) {
        
    }
    const url = `https://viacep.com.br/ws/${cepFormatedValue}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    const response = await fetch(url,options);
    const json = await response.json();
    
}
const a = async () => {
    const cnpjValue = Cnpj.value;
    const cnpjFormatedValue = cnpjValue
        .replace('.','')
        .replace('-','')
        .replace('/','')
        .trim();
const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpjFormatedValue}`;

return;

}

Cep.addEventListener('change', async () => {
    BuscarCep()
});
Cnpj.addEventListener('change', a);