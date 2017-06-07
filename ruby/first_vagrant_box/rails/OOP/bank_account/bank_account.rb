class BankAccount
  # We didn't use attr_writer or accessor so user can't make new here.
  attr_reader :checking, :saving

  @@total_accounts = 0
  @interest = 0.01

  def initialize
    @account_number = ""
    @checking = 500
    @saving = 0
    generate_account_number
    @@total_accounts += 1
    # ++ doesn't work
  end

  def deposit(account, amount)
    if account.downcase == "checking"
      @checking += amount
      # @checking
    elsif account.downcase == "saving"
      @saving += amount
      # @saving
    else
      "You put wrong account!"
    end
  end

  def withdraw(account, amount)
    if account.downcase == "checking"
      if amount > @checking
        "You have insufficient funds in your checking account"
       else 
        @checking -= amount
        # @checking
      end
    elsif account.downcase == "saving"
      if amount > @saving
        "You have insufficient funds in your saving account"
      else
        @saving -= amount
        # @saving
      end
    else
      "You put wrong account!"
    end
  end
  
  def my_total
    @checking + @saving
  end

  # Any time method is run on class itself not instance use below format.
  # example User.create()
  def self.num_accounts
    @@total_accounts
  end

def account_information
  puts "Your checking balance is #{@checking}"
  puts "Your saving balance is #{@saving}"
  puts "Your total balance is #{self.my_total}"
  puts "Your account number is #{@account_number}"
end




  private
  def generate_account_number()
    (1..16).each do
      @account_number += rand(0..9).to_s
    end
  end
end
###################
customer1 = BankAccount.new
two = BankAccount.new
three = BankAccount.new
four = BankAccount.new
puts BankAccount.num_accounts


# puts "Your checking balance is #{customer1.checking}" 
# puts "Your saving balance is #{customer1.saving}"

puts customer1.deposit('checking', 100)
puts customer1.deposit('saving', 100)

puts customer1.withdraw("checking", 650)
puts customer1.withdraw("saving", 150)

# puts "Your total balance is now #{customer1.my_total}"

customer1.account_information

###########################
# Solution
#####################
# class BankAccount
#   attr_reader :car, :account_number, :checking, :saving

#   @@bank_accounts = 0

#   def initialize 
#     @account_number = create_account
#     @checking = 0
#     @saving = 0
#     @@bank_accounts += 1
#     # not accessible since we do not have a reader for it
#     @interest_rate = 0.01
#   end

#   def deposit(account, amount)
#     if account.downcase == "checking"
#       @checking += amount
#     else
#       @saving += amount 
#     end
#   end

#   def withdrawal(account, amount)
#     if account.downcase == "checking"
#       if @checking - amount < 0
#         raise "Insufficient Funds, you have #{@checking} in this account"
#       else
#         @checking -= amount
#       end
#     else
#       if @saving - amount < 0
#         raise "Insufficient Funds, you have #{@saving} in this account"
#       else
#         @saving -= amount
#       end
#     end
#   end

#   def total
#     "Checking Balance: #{@checking}\nSaving Balance: #{@saving}\nTotal Balance: #{@checking + @saving}"
#   end

#   def account_information
#     "Account Number: #{@account_number}\nInterest Rate: #{@interest_rate}\n#{self.total}" 
#   end

#   def self.number_of_accounts
#     @@bank_accounts
#   end

#   private
#     def create_account
#       Array.new(10).map { rand(1..9) }.join
#     end
# end

