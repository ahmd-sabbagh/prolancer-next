// app/(all)/setting/privacy-and-security/page.tsx
import React from "react";
import ChangePassword from "./_components/ChangePassword";
import AccountVerification from "./_components/AccountVerification";
import Header from "./_components/Header";


export default function page() {
    return (
        <div className="min-h-screen bg-[#F6F8FB]">
            <div className="container py-8">
                {/* Page Title */}
                <div className="mb-6 mt-7">
                    <Header/>
                </div>

                <ChangePassword />
                <AccountVerification />

                {/* Delete Account */}
                <div className="
                        p-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center
                        sm:justify-between mt-6 rounded-xl border border-slate-100 bg-white shadow-sm
                    "
                >
                    <div className="text-center sm:text-right">
                        <h2 className="text-lg text-red-600">
                            حذف الحساب
                        </h2>
                        <p className="mt-2 text-xs text-slate-500">
                            سيتم حذف جميع بياناتك بشكل نهائي و لا يمكن استرجاعها.
                        </p>
                    </div>

                    <button className="rounded-lg px-4 py-2 text-sm font-medium bg-red-500 text-white">
                        حذف الحساب
                    </button>
                </div>

            </div>
        </div>
    );
}
