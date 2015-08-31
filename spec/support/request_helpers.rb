module RequestHelpers

  def content
    result = JSON.parse(response.body)
    result.is_a?(Hash) ? result.with_indifferent_access : result
  end

  def should_have_key key, expected
    expect(content[key]).to eq expected
  end
end
