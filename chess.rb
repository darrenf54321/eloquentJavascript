class Chess

  def output(num)
    size = num
    hash1 = "# "
    hash2 = " #"
    count = size

      while (count > 0)
        puts (hash1 * size)
        puts (hash2 * size)
      count -= 2
      end
  end
end

puts "Please enter a number: "
number = gets.chomp.to_i

game = Chess.new
game.output(number)
