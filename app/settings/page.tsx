// app/settings/page.jsx
import React from "react";

const Layout: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="min-h-screen bg-gray-50 p-6">
    {title && <h1 className="sr-only">{title}</h1>}
    <div className="max-w-6xl mx-auto">{children}</div>
  </div>
);
import { FiUser, FiMail, FiLock, FiSettings } from "react-icons/fi";

type SettingSectionProps = {
  title: string;
  children?: React.ReactNode;
};

const SettingSection: React.FC<SettingSectionProps> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
      <FiSettings className="w-5 h-5 mr-2 text-yellow-600" />
      {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  icon: React.ComponentType<any>;
  value?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder = "", icon: Icon, value }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"
      />
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  </div>
);

export default function ProfileSettingsPage() {
  return (
    <Layout title="Account Settings">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        Manage your profile, security, and account preferences
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Profile Information */}
        <SettingSection title="Basic Profile Information">
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            icon={FiUser}
            value="Bonae Ineza"
          />
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={FiMail}
            value="bonae.ineza@ngalimining.com"
          />
          <InputField
            label="Job Title"
            type="text"
            placeholder="Your current role"
            icon={FiUser}
            value="Managing Director"
          />
          <button className="px-5 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
            Save Profile Changes
          </button>
        </SettingSection>

        {/* Security Settings */}
        <SettingSection title="Security Settings">
          <InputField
            label="Current Password"
            type="password"
            placeholder="••••••••"
            icon={FiLock}
          />
          <InputField
            label="New Password"
            type="password"
            placeholder="Enter new password"
            icon={FiLock}
          />
          <InputField
            label="Confirm New Password"
            type="password"
            placeholder="Confirm new password"
            icon={FiLock}
          />

          <div className="pt-2">
            <button className="px-5 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
              Update Password
            </button>
          </div>
        </SettingSection>

        {/* General Preferences */}
        <div className="lg:col-span-2">
          <SettingSection title="General Preferences">
            <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
              <div>
                <p className="font-medium text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive alerts for new high-priority requisitions.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
              <div>
                <p className="font-medium text-gray-800">
                  Two-Factor Authentication (2FA)
                </p>
                <p className="text-sm text-gray-500">
                  Enhance account security with 2FA.
                </p>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                Enable 2FA
              </button>
            </div>
          </SettingSection>
        </div>
      </div>
    </Layout>
  );
}
