# Hair Legance Salon

This is the editable VS Code project for the Hair Legance booking website.
It is also an installable web app: after publishing, customers can use their browser's **Add to Home Screen** option.

## Open and run it in VS Code

1. Extract the ZIP file.
2. Open Visual Studio Code.
3. Select **File > Open Folder** and choose `Hair-Legance-VSCode`.
4. Select **Terminal > New Terminal**.
5. Run `npm install`.
6. Run `npm run dev`.
7. Open `http://localhost:3000` in your browser.

## Where to make changes

- Services, prices and appointment times: `app/page.tsx`
- Colours and page design: `app/globals.css`
- WhatsApp number: change `whatsappNumber` in `app/page.tsx`
- Secure Yoco payment code: `app/api/checkout/route.ts`
- Logo: `public/hair-legance-logo.jpg`

The WhatsApp number must use international format without `+`, spaces or the first zero. The current value `27730754203` sends bookings to `073 075 4203`.

## Activate Yoco payments safely

1. The business owner must create or sign in to a Yoco account.
2. Copy `.env.example` and rename the copy to `.env.local`.
3. Put the Yoco test secret key in `.env.local`.
4. Never paste the key into `page.tsx`, upload it to GitHub, or share it publicly.
5. Test payments before using a live key.

## Publish with GitHub and Vercel

1. Create a new GitHub repository.
2. In VS Code, open **Source Control**, choose **Publish to GitHub**, and select the Hair Legance folder.
3. Sign in at Vercel and import the GitHub repository.
4. Add `YOCO_SECRET_KEY` under the Vercel project's environment variables.
5. Deploy the project.
6. Add the final website domain to Yoco's verified domains before taking live payments.

After publishing, every change follows the same routine: edit in VS Code, save, commit, and push to GitHub. Vercel will publish the update automatically.
