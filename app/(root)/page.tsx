import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  const banks: (Bank & Account)[] = [
    {
      $id: "1",
      accountId: "acc_1",
      bankId: "bank_1",
      accessToken: "token_1",
      fundingSourceUrl: "url_1",
      userId: "user_1",
      sharableId: "share_1",
      id: "acc_1",
      availableBalance: 0, // Default value
      currentBalance: 123.5, // Required field
      officialName: "Bank A",
      mask: "1234",
      institutionId: "inst_1",
      name: "Dev Chawla",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "item_1",
    },
    {
      $id: "2",
      accountId: "acc_2",
      bankId: "bank_2",
      accessToken: "token_2",
      fundingSourceUrl: "url_2",
      userId: "user_2",
      sharableId: "share_2",
      id: "acc_2",
      availableBalance: 0, // Default value
      currentBalance: 500.5, // Required field
      officialName: "Bank B",
      mask: "5678",
      institutionId: "inst_2",
      name: "Savings",
      type: "depository",
      subtype: "savings",
      appwriteItemId: "item_2",
    },
  ];
  
  return (
    <>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || "Guest"}
              subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
          RECENT TRANSACTIONS
        </div>

        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks= {banks}
        />
      </section>

      
    </>
  );
};

export default Home;
