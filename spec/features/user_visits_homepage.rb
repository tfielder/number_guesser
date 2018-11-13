require 'rails_helper'

describe 'As a visitor visiting "/"' do
  it 'displays the homepage' do
    visit '/'

    expect(current_path).to eq(root_path)

    expect(page).to have_content("Number Guesser")
    expect(page).to have_css(".user_input")
    expect(page).to have_button(".guess")
    expect(page).to have_button(".clear")
    expect(page).to have_button(".reset")
  end
end