import React from 'react';
export type DashboardcardProps = Readonly<{
    title: string;
    subTitle?: string;
    value: number;
    progress: number; // 0 - 100
    icon: React.ReactNode;
    bgColor?: string | '#fff';
  }>;