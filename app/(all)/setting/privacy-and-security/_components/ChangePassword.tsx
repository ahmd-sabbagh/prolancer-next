"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div className="w-full mt-10">
        <div className="rounded-lg border border-slate-100 bg-white shadow-sm">
          <div className="px-6 py-6 sm:px-6 sm:py-6">
            <div className="text-right mb-6">
              <h2 className="text-lg text-slate-900">تغيير كلمة المرور</h2>
            </div>

            {/* Current */}
            <div className="mt-3">
              <p className="mb-3 text-sm font-medium text-slate-700">
                كلمة المرور الحالية
              </p>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  className="w-full rounded-lg !border !border-slate-200 bg-white py-2 pr-5 pl-12 text-right text-slate-800 outline-none focus:border-slate-300 tracking-widest"
                />

                {showCurrent ? (
                  <FiEyeOff
                    onClick={() => setShowCurrent(false)}
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer"
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowCurrent(true)}
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2">
              {/* New */}
              <div>
                <p className="mb-3 text-sm font-medium text-slate-700 text-right">
                  كلمة المرور الجديدة
                </p>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    className="w-full rounded-lg !border !border-slate-200 bg-white py-2 pr-5 pl-12 text-right text-slate-800 outline-none focus:border-slate-300 tracking-widest"
                  />

                  {showNew ? (
                    <FiEyeOff
                      onClick={() => setShowNew(false)}
                      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer"
                    />
                  ) : (
                    <FiEye
                      onClick={() => setShowNew(true)}
                      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer"
                    />
                  )}
                </div>
              </div>

              {/* Confirm */}
              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">
                  تأكيد كلمة المرور الجديدة
                </p>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    className="w-full rounded-lg !border !border-slate-200 bg-white py-2 pr-5 pl-12 text-right text-slate-800 outline-none focus:border-slate-300 tracking-widest"
                  />

                  {showConfirm ? (
                    <FiEyeOff
                      onClick={() => setShowConfirm(false)}
                      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer"
                    />
                  ) : (
                    <FiEye
                      onClick={() => setShowConfirm(true)}
                      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-300 cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-center sm:justify-end">
        <button className="rounded-lg px-4 py-2 text-sm font-medium bg-emerald-500 text-white">
          تغيير كلمة المرور
        </button>
      </div>
    </>
  );
}
