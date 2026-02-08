import { test,defineConfig, expect} from '@playwright/test';
const baseURL= 'https://fake-json-api.mock.beeceptor.com/';


test.describe('Api automation',()=>{
test('aa',async({request})=>{

    const response= await request.get(`${baseURL}/users`)
    console.log(response);
    expect(response.status()).toBe(200);

});

test('getting the details of the user by id',async({request})=>
{
    // const random_id =Math.floor(Math.random()*0)+1;
    // const response1= await request.get(`${baseURL}\api/users\${random_id}`);
    // console.log(response1);
    // expect(response1.status()).toBe(200);
    // const body= response1.json()
    // console.log(body);

});
})
