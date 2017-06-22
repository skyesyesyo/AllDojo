# bank_account.rb

class BankAccount
  attr_reader :account_number, :checking, :saving

  @@bank_accounts = 0

  def initialize 
    @account_number = create_account
    @checking = 0
    @saving = 0
    @@bank_accounts += 1
    # not accessible since we do not have a reader for it
    @interest_rate = 0.01
  end

  def deposit(account, amount)
    if account.downcase == "checking"
      @checking += amount
    else
      @saving += amount 
    end
  end

  def withdrawal(account, amount)
    if account.downcase == "checking"
      if @checking - amount < 0
        raise "Insufficient Funds, you have #{@checking} in this account"
      else
        @checking -= amount
      end
    else
      if @saving - amount < 0
        raise "Insufficient Funds, you have #{@saving} in this account"
      else
        @saving -= amount
      end
    end
  end

  def total
    "Checking Balance: #{@checking}\nSaving Balance: #{@saving}\nTotal Balance: #{@checking + @saving}"
  end

  def account_information
    "Account Number: #{@account_number}\nInterest Rate: #{@interest_rate}\n#{self.total}" 
  end

  def self.number_of_accounts
    @@bank_accounts
  end

  private
    def create_account
      Array.new(10).map { rand(1..9) }.join
    end
end

# bank_account_spec.rb
RSpec.describe BankAccount do
  before(:each) do
    @acc = BankAccount.new
  end

  it "has a getter method for retrieving the checking account balance" do
    expect(@acc.checking).to eq(0)
  end

  it "has a getter method that retrieves the total account balance" do
    expect(@acc.total).to eq("Checking Balance: 0\nSaving Balance: 0\nTotal Balance: 0")
  end

  context "withdrawing money" do
    it "raises an error if user tries to withdraw more money than the have in checkings" do
      expect{ @acc.withdrawal("checking", 100) }.to raise_error("Insufficient Funds, you have 0 in this account")
    end

    it "raises an error if user tries to withdraw more money than the have in savings" do
      expect{ @acc.withdrawal("savings", 100) }.to raise_error("Insufficient Funds, you have 0 in this account")
    end
  end

  it "raises an error when the user attempts to retrieve the total number of bank accounts" do
    expect{ @acc.number_of_accounts }.to raise_error(NoMethodError)
  end

  it "raises an error when the user attempts to set the interest rate" do
    expect{ @acc.interest_rate }.to raise_error(NoMethodError)
  end
end