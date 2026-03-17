import{test,expect} from './fixture';
test('Sell aietime product', async({authenticatedPage})=>{
  await authenticatedPage.goto('https://quality-engineering-labs.vercel.app/payment.html');
  await authenticatedPage.getByTestId('input-phone').fill('0721234567');
  await authenticatedPage. getByTestId('select-product').selectOption('airtime');
  await authenticatedPage.getByTestId('select-provider').selectOption('MTN');
  await authenticatedPage.getByTestId('quick-R29').click();
  await authenticatedPage.getByTestId('check-terms').check();
  await authenticatedPage.getByRole('button',{name:'Process Sale'}).click();
  await expect(authenticatedPage.getByText('Sale Processed Successfully!')).toBeVisible();
  await expect(authenticatedPage.getByTestId('receipt-ref')).toBeVisible();
});
