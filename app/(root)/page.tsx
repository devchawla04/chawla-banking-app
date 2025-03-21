import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  var loggedInID = loggedIn?.$id;
  const accounts = await getAccounts({ userId: loggedInID });

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });

  return (
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={`${loggedIn?.firstName} ${loggedIn.lastName}` || "Guest"}
              subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox
              accounts={accountsData}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />
          </header>
          <RecentTransactions
            accounts={accountsData}
            transactions={accounts?.transactions}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          />
        </div>

        <RightSideBar
          user={loggedIn}
          transactions={account?.transactions}
          banks={accountsData?.slice(0, 2)}
        />
      </section>
    </>
  );
};

export default Home;
